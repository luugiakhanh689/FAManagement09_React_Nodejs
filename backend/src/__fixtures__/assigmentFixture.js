const genericFixture = require('./genericFixture');
const AssigmentRepository = require('../database/repositories/assigmentRepository');

const assigmentFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new AssigmentRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = assigmentFixture;
