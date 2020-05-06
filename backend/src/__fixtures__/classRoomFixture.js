const genericFixture = require('./genericFixture');
const ClassRoomRepository = require('../database/repositories/classRoomRepository');

const classRoomFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ClassRoomRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = classRoomFixture;
