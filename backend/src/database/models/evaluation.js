const database = require('../database');
const Schema = database.Schema;

/**
 * Evaluation database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const EvaluationSchema = new Schema(
  {
    trainee: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'course',
    },
    topic: {
      type: Schema.Types.ObjectId,
      ref: 'topic',
    },
    process: {
      type: Number,
      min: 1,
      max: 100,
    },
    timeliness: {
      type: Number,
      min: 1,
      max: 100,
    },
    teamwork: {
      type: Number,
      min: 1,
      max: 100,
    },
    workquality: {
      type: Number,
      min: 1,
      max: 100,
    },
    presComm: {
      type: Number,
      min: 1,
      max: 100,
    },
    academicMark: {
      type: Number,
      min: 1,
      max: 100,
    },
    softskill: {
      type: Number,
      min: 1,
      max: 100,
    },
    attDis: {
      type: Number,
      min: 1,
      max: 100,
    },
    comment: {
      type: String,
    },
    finalGrade: {
      type: Number,
      min: 1,
      max: 100,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    importHash: { type: String },
  },
  { timestamps: true },
);

EvaluationSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

EvaluationSchema.set('toJSON', {
  getters: true,
});

EvaluationSchema.set('toObject', {
  getters: true,
});

const Evaluation = database.model('evaluation', EvaluationSchema);

module.exports = Evaluation;
