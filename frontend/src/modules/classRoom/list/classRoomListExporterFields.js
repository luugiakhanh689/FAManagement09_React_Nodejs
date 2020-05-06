import model from 'modules/classRoom/classRoomModel';

const { fields } = model;

export default [
  fields.id,
  fields.codeClass,
  fields.className,
  fields.limit,
  fields.admin,
  fields.createdAt,
  fields.updatedAt
];
