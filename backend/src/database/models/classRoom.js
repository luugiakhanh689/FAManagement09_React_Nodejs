const database = require('../database');
const Schema = database.Schema;

/**
 * ClassRoom database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const ClassRoomSchema = new Schema(
  {
    codeClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
    },
    admin: {
      type: String,
      required: true,
      enum: [
        "HanLTP",
        "DanPL",
        "BinhNT44",
        "VanTT7"
      ],
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

ClassRoomSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

ClassRoomSchema.set('toJSON', {
  getters: true,
});

ClassRoomSchema.set('toObject', {
  getters: true,
});

const ClassRoom = database.model('classRoom', ClassRoomSchema);

module.exports = ClassRoom;
