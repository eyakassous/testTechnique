const express = require("express");
const router = express.Router();
const cors = require('cors');
const MatiereModel = require("./models/Matiere");

router.use(cors());
router.use(express.json());

router.get('/matieres', (req, res) => {
    MatiereModel.find({})
        .then(matieres => res.json(matieres))
        .catch(err => res.json(err));
});

router.get('/getMatiere/:id', (req, res) => {
    const id = req.params.id;
    MatiereModel.findById({_id:id})
    .then(matieres => res.json(matieres))
    .catch(err => res.json(err))
})


router.post("/createMatiere", (req, res) => {
    MatiereModel.create(req.body)
    .then(matieres => res.json(matieres))
    .catch(err => res.json(err))
})

router.put('/updateMatiere/:id', (req, res) => {
    const id = req.params.id;
    MatiereModel.findByIdAndUpdate({_id:id},
        {
            nom : req.body.nom ,
            prix:req.body.prix,
            img : req.body.img

        })
    .then(matieres => res.json(matieres))
    .catch(err => res.json(err))
})

router.delete('/deleteMatiere/:id', (req, res) => {
    const id = req.params.id;
    MatiereModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))

})

module.exports = router;
