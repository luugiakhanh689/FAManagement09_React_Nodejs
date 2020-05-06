const database = require('../database');
const Schema = database.Schema;

/**
 * Course database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const CourseSchema = new Schema(
  {
    codeClass: {
      type: Schema.Types.ObjectId,
      ref: 'classRoom',
    },
    iDCourse: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    lectureName: {
      type: String,
      required: true,
    },
    fromTime: {
      type: String,
      required: true,
    },
    toTime: {
      type: String,
      required: true,
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

CourseSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

CourseSchema.set('toJSON', {
  getters: true,
});

CourseSchema.set('toObject', {
  getters: true,
});

const Course = database.model('course', CourseSchema);

module.exports = Course;
