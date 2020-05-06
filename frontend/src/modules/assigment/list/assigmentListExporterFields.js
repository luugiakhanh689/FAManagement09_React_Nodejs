import model from 'modules/assigment/assigmentModel';

const { fields } = model;

export default [
  fields.id,
  fields.codeClass,
  fields.trainerID,
  fields.fromDate,
  fields.toDate,
  fields.status,
  fields.createdAt,
  fields.updatedAt
];
