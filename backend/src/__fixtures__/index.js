const userFixture = require('./userFixture');
const classRoomFixture = require('./classRoomFixture');
const courseFixture = require('./courseFixture');
const assigmentFixture = require('./assigmentFixture');
const topicFixture = require('./topicFixture');
const evaluationFixture = require('./evaluationFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  classRoom: classRoomFixture,
  course: courseFixture,
  assigment: assigmentFixture,
  topic: topicFixture,
  evaluation: evaluationFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
