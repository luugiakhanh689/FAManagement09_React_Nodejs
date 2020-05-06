const MongooseRepository = require('./mongooseRepository');
const MongooseQueryUtils = require('../utils/mongooseQueryUtils');
const AuditLogRepository = require('./auditLogRepository');
const Evaluation = require('../models/evaluation');

/**
 * Handles database operations for the Evaluation.
 * See https://mongoosejs.com/docs/index.html to learn how to customize it.
 */
class EvaluationRepository {
  /**
   * Creates the Evaluation.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async create(data, options) {
    if (MongooseRepository.getSession(options)) {
      await Evaluation.createCollection();
    }

    const currentUser = MongooseRepository.getCurrentUser(
      options,
    );

    const [record] = await Evaluation.create(
      [
        {
          ...data,
          createdBy: currentUser.id,
          updatedBy: currentUser.id,
        },
      ],
      MongooseRepository.getSessionOptionsIfExists(options),
    );

    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record.id,
      data,
      options,
    );



    return this.findById(record.id, options);
  }

  /**
   * Updates the Evaluation.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  async update(id, data, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Evaluation.updateOne(
        { _id: id },
        {
          ...data,
          updatedBy: MongooseRepository.getCurrentUser(
            options,
          ).id,
        },
      ),
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      id,
      data,
      options,
    );

    const record = await this.findById(id, options);



    return record;
  }

  /**
   * Deletes the Evaluation.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async destroy(id, options) {
    await MongooseRepository.wrapWithSessionIfExists(
      Evaluation.deleteOne({ _id: id }),
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      id,
      null,
      options,
    );


  }

  /**
   * Counts the number of Evaluations based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  async count(filter, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Evaluation.countDocuments(filter),
      options,
    );
  }

  /**
   * Finds the Evaluation and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  async findById(id, options) {
    return MongooseRepository.wrapWithSessionIfExists(
      Evaluation.findById(id)
      .populate('trainee')
      .populate('course')
      .populate('topic'),
      options,
    );
  }

  /**
   * Finds the Evaluations based on the query.
   * See https://mongoosejs.com/docs/queries.html to learn how
   * to customize the queries.
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  async findAndCountAll(
    { filter, limit, offset, orderBy } = {
      filter: null,
      limit: 0,
      offset: 0,
      orderBy: null,
    },
    options,
  ) {
    let criteria = {};

    if (filter) {
      if (filter.id) {
        criteria = {
          ...criteria,
          ['_id']: MongooseQueryUtils.uuid(filter.id),
        };
      }

      if (filter.trainee) {
        criteria = {
          ...criteria,
          trainee: MongooseQueryUtils.uuid(
            filter.trainee,
          ),
        };
      }

      if (filter.course) {
        criteria = {
          ...criteria,
          course: MongooseQueryUtils.uuid(
            filter.course,
          ),
        };
      }

      if (filter.topic) {
        criteria = {
          ...criteria,
          topic: MongooseQueryUtils.uuid(
            filter.topic,
          ),
        };
      }

      if (filter.academicMarkRange) {
        const [start, end] = filter.academicMarkRange;

        if (start !== undefined && start !== null && start !== '') {
          criteria = {
            ...criteria,
            academicMark: {
              ...criteria.academicMark,
              $gte: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          criteria = {
            ...criteria,
            academicMark: {
              ...criteria.academicMark,
              $lte: start,
            },
          };
        }
      }

      if (filter.softskillRange) {
        const [start, end] = filter.softskillRange;

        if (start !== undefined && start !== null && start !== '') {
          criteria = {
            ...criteria,
            softskill: {
              ...criteria.softskill,
              $gte: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          criteria = {
            ...criteria,
            softskill: {
              ...criteria.softskill,
              $lte: start,
            },
          };
        }
      }

      if (filter.attDisRange) {
        const [start, end] = filter.attDisRange;

        if (start !== undefined && start !== null && start !== '') {
          criteria = {
            ...criteria,
            attDis: {
              ...criteria.attDis,
              $gte: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          criteria = {
            ...criteria,
            attDis: {
              ...criteria.attDis,
              $lte: start,
            },
          };
        }
      }

      if (filter.comment) {
        criteria = {
          ...criteria,
          comment: {
            $regex: MongooseQueryUtils.escapeRegExp(
              filter.comment,
            ),
            $options: 'i',
          },
        };
      }

      if (filter.finalGradeRange) {
        const [start, end] = filter.finalGradeRange;

        if (start !== undefined && start !== null && start !== '') {
          criteria = {
            ...criteria,
            finalGrade: {
              ...criteria.finalGrade,
              $gte: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          criteria = {
            ...criteria,
            finalGrade: {
              ...criteria.finalGrade,
              $lte: start,
            },
          };
        }
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          criteria = {
            ...criteria,
            ['createdAt']: {
              ...criteria.createdAt,
              $gte: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          criteria = {
            ...criteria,
            ['createdAt']: {
              ...criteria.createdAt,
              $lte: end,
            },
          };
        }
      }
    }

    const sort = MongooseQueryUtils.sort(
      orderBy || 'createdAt_DESC',
    );

    const skip = Number(offset || 0) || undefined;
    const limitEscaped = Number(limit || 0) || undefined;

    const rows = await Evaluation.find(criteria)
      .skip(skip)
      .limit(limitEscaped)
      .sort(sort)
      .populate('trainee')
      .populate('course')
      .populate('topic');

    const count = await Evaluation.countDocuments(criteria);

    return { rows, count };
  }

  /**
   * Lists the Evaluations to populate the autocomplete.
   * See https://mongoosejs.com/docs/queries.html to learn how to
   * customize the query.
   *
   * @param {Object} search
   * @param {number} limit
   */
  async findAllAutocomplete(search, limit) {
    let criteria = {};

    if (search) {
      criteria = {
        $or: [
          { _id: MongooseQueryUtils.uuid(search) },

        ],
      };
    }

    const sort = MongooseQueryUtils.sort('id_ASC');
    const limitEscaped = Number(limit || 0) || undefined;

    const records = await Evaluation.find(criteria)
      .limit(limitEscaped)
      .sort(sort);

    return records.map((record) => ({
      id: record.id,
      label: record['id'],
    }));
  }

  /**
   * Creates an audit log of the operation.
   *
   * @param {string} action - The action [create, update or delete].
   * @param {object} id - The record id
   * @param {object} data - The new data passed on the request
   * @param {object} options
   */
  async _createAuditLog(action, id, data, options) {
    await AuditLogRepository.log(
      {
        entityName: Evaluation.modelName,
        entityId: id,
        action,
        values: data,
      },
      options,
    );
  }
}

module.exports = EvaluationRepository;
