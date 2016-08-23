
var mongoose = require('mongoose');

module.exports = mongoose.model('Blog', {
  title: String,
  blogType: { type: String, default: 'JS' },
  author: { type: String, default: 'mystery' },
  description: String,
  comments: [{ type: String, date: { type: Date, default: Date.now }}],
  date: { type: Date, default: Date.now },
  votes: {
    upvote: Number,
    downvote: Number

  },

  link: String,
  tags: {
    t_1: String,
    t_2: String,
    t_3: String,
    t_4: String
  }



});
