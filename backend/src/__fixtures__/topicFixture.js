const genericFixture = require('./genericFixture');
const TopicRepository = require('../database/repositories/topicRepository');

const topicFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new TopicRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = topicFixture;
