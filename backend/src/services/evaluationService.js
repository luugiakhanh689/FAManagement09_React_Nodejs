const EvaluationRepository = require('../database/repositories/evaluationRepository');
const ValidationError = require('../errors/validationError');
const MongooseRepository = require('../database/repositories/mongooseRepository');
const EvaluationCalculator = require('./evaluationCalculator');
/**
 * Handles Evaluation operations
 */
module.exports = class EvaluationService {
  constructor({ currentUser, language }) {
    this.repository = new EvaluationRepository();
    this.currentUser = currentUser;
    this.language = language;
  }

  /**
   * Creates a Evaluation.
   *
   * @param {*} data
   */
  async create(data) {
    data.academicMark = await this.calculateEvaluation(
      data,
    );
    data.softskill = await this.calculateEvaluation1(data);
    data.finalGrade = await this.calculateEvaluation2(data);
    const session = await MongooseRepository.createSession();

    try {
      const record = await this.repository.create(data, {
        session: session,
        currentUser: this.currentUser,
      });

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  /**
   * Updates a Evaluation.
   *
   * @param {*} id
   * @param {*} data
   */
  async update(id, data) {
    data.academicMark = await this.calculateEvaluation(
      data,
    );
    data.softskill = await this.calculateEvaluation1(data);
    data.finalGrade = await this.calculateEvaluation2(data);
    const session = await MongooseRepository.createSession();

    try {
      const record = await this.repository.update(
        id,
        data,
        {
          session,
          currentUser: this.currentUser,
        },
      );

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  /**
   * Destroy all Evaluations with those ids.
   *
   * @param {*} ids
   */
  async destroyAll(ids) {
    const session = await MongooseRepository.createSession();

    try {
      for (const id of ids) {
        await this.repository.destroy(id, {
          session,
          currentUser: this.currentUser,
        });
      }

      await MongooseRepository.commitTransaction(session);
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  /**
   * Finds the Evaluation by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    return this.repository.findById(id);
  }

  /**
   * Finds Evaluations for Autocomplete.
   *
   * @param {*} search
   * @param {*} limit
   */
  async findAllAutocomplete(search, limit) {
    return this.repository.findAllAutocomplete(
      search,
      limit,
    );
  }

  /**
   * Finds Evaluations based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    return this.repository.findAndCountAll(args);
  }

  /**
   * Imports a list of Evaluations.
   *
   * @param {*} data
   * @param {*} importHash
   */
  async import(data, importHash) {
    if (!importHash) {
      throw new ValidationError(
        this.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new ValidationError(
        this.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  /**
   * Checks if the import hash already exists.
   * Every item imported has a unique hash.
   *
   * @param {*} importHash
   */
  async _isImportHashExistent(importHash) {
    const count = await this.repository.count({
      importHash,
    });

    return count > 0;
  }
  async calculateEvaluation(data) {
    const { process, timeliness, workquality } = data;
    return EvaluationCalculator.calculate(
      process,
      timeliness,
      workquality,
    );
  }
  async calculateEvaluation1(data) {
    const { teamwork, presComm } = data;
    return EvaluationCalculator.calculate1(
      teamwork,
      presComm,
    );
  }
  async calculateEvaluation2(data) {
    const { academicMark, softskill, attDis } = data;
    return EvaluationCalculator.calculate2(
      academicMark,
      softskill,
      attDis,
    );
  }
};
