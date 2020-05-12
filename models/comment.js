const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    content: {
      Type: String
    },
    authorId: { //creator
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    imageName: { //message
      type: String
    },
    imageUrl: { //picture
      type: String
    }
  },
  {
    timestamps: {
      createdAt: 'creationDate',
      updatedAt: 'updatedDate'
    }
  }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;