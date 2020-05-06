const genericFixture = require('./genericFixture');
const CourseRepository = require('../database/repositories/courseRepository');

const courseFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new CourseRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = courseFixture;
