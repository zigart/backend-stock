const card = require("../models/card.model.js");
const { restart } = require("nodemon");
const cardModel = require("../models/card.model.js");

let controller = {

  addCard: function (req, res) {

    let card = new cardModel();
    let params = req.body;
    
    card.title = params.title;
    card.description = params.description;
    card.counter = params.counter;
    
    card.save((err, cardStored) => {
      if (err) return res.status(500).send({ message: "error al guardar" });
      if (!cardStored)
        return res
          .status(404)
          .send({ message: "no se pudo crear el contador" });

      return res.status(200).send({ card: cardStored });
    });
  },
  getCards: function (req, res) {

    card.find({}).exec((err, card) => {
      if (err) return res.status(500).send({ message: "error al devolver los datos" });
      if (!card) return res.status(404).send({ message: "no existe el proyecto" });
      return res.status(200).send({ card });
    });
  },

  deleteCard: function (req, res) {

    let cardId = req.params.id;

    card.findByIdAndDelete(cardId, (err, cardRemoved) => {
      if (err) return res.status(500).send({ message: "error eliminar" });
      if (!cardRemoved) return res.status(404).send({ message: "no existe el proyecto a eliminar" });
      return res.status(200).send({ card: cardRemoved });
    });
  },

  updateCounter: function(req,res){

    let cardId = req.params.id;
    let update = req.body;

    card.findByIdAndUpdate(cardId, update, {new: true}, (err, cardUpdated)=>{
        if(err) return res.status(500).send({message: 'error al actualizar'});
        if (!cardUpdated) return res.status(404).send({message:'no existe la tarjeta a actualizar'});
        return res.status(200).send({card: cardUpdated});
    });
  }
};

module.exports = controller;
