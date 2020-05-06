import model from 'modules/course/courseModel';

const { fields } = model;

export default [
  fields.codeClass,
  fields.iDCourse,
  fields.courseName,
  fields.lectureName,
  fields.fromTime,
  fields.toTime,
];
