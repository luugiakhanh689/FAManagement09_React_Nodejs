const database = require('../database');
const Schema = database.Schema;

/**
 * Topic database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const TopicSchema = new Schema(
  {
    course: [{
      type: Schema.Types.ObjectId,
      ref: 'course',
    }],
    topicName: {
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

TopicSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

TopicSchema.set('toJSON', {
  getters: true,
});

TopicSchema.set('toObject', {
  getters: true,
});

const Topic = database.model('topic', TopicSchema);

module.exports = Topic;
