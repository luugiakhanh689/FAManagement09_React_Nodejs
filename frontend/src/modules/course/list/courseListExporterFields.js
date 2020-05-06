import model from 'modules/course/courseModel';

const { fields } = model;

export default [
  fields.id,
  fields.codeClass,
  fields.iDCourse,
  fields.courseName,
  fields.lectureName,
  fields.fromTime,
  fields.toTime,
  fields.createdAt,
  fields.updatedAt
];
