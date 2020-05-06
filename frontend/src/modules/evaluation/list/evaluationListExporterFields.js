import model from 'modules/evaluation/evaluationModel';

const { fields } = model;

export default [
  fields.id,
  fields.trainee,
  fields.course,
  fields.topic,
  fields.process,
  fields.timeliness,
  fields.teamwork,
  fields.workquality,
  fields.presComm,
  fields.academicMark,
  fields.softskill,
  fields.attDis,
  fields.comment,
  fields.finalGrade,
  fields.createdAt,
  fields.updatedAt
];
