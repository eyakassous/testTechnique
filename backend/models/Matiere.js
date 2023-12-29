const mongoose = require('mongoose');

const MatiereSchema = new mongoose.Schema({
    nom: String,
    prix: String,
    img: String
});

const MatiereModel = mongoose.model("Matiere", MatiereSchema);
module.exports = MatiereModel;
