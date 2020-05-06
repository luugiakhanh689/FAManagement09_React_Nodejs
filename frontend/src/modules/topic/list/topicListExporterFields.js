import model from 'modules/topic/topicModel';

const { fields } = model;

export default [
  fields.id,
  fields.course,
  fields.topicName,
  fields.createdAt,
  fields.updatedAt
];
