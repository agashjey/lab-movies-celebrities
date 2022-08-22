const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const movieSchema = new Schema(
  {
    title: {
      type: Schema.Types.String
    },
    genre: {
      type: Schema.Types.String
    },
    plot: {
        type: Schema.Types.String
    },
    cast: {
        type: [Schema.Types.ObjectId],
        ref: 'Celebrity'
    }
  }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie;