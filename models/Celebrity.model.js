//  Add your code here
const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const celebritySchema = new Schema(
  {
    name: {
      type: Schema.Types.String
    },
    occupation: {
      type: [Schema.Types.String]
    },
    catchPhrase: {
        type: Schema.Types.String
    }
  }
);

const Celebrity = model('Celebrity', celebritySchema);

module.exports = Celebrity;