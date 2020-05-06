const database = require('../database');
const Schema = database.Schema;

/**
 * Assigment database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const AssigmentSchema = new Schema(
  {
    codeClass: {
      type: Schema.Types.ObjectId,
      ref: 'classRoom',
      required: true,
    },
    trainerID: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    fromDate: {
      type: String,
      required: true,
    },
    toDate: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false
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

AssigmentSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

AssigmentSchema.set('toJSON', {
  getters: true,
});

AssigmentSchema.set('toObject', {
  getters: true,
});

const Assigment = database.model('assigment', AssigmentSchema);

module.exports = Assigment;
