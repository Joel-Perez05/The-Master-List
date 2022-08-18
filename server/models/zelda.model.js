const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    userName: { type: String },
    firstGame: { type: String },
    secondGame: { type: String },
    thirdGame: { type: String },
    fourthGame: { type: String },
    fifthGame: { type: String },
}, { timestamps: true });
module.exports = mongoose.model('Person', PersonSchema);

