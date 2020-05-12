const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    content: {
      Type: String
    },
    creatorId: { //creator
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    pictureName: { //message
      type: String
    },
    pictureUrl: { //picture
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

const Post = mongoose.model('Post', postSchema);

module.exports = Post;