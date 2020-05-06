const genericFixture = require('./genericFixture');
const EvaluationRepository = require('../database/repositories/evaluationRepository');

const evaluationFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new EvaluationRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = evaluationFixture;
