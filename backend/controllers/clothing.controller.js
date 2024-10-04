const db = require("../models");
const Clothing = db.clothing;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const clothing = {
    description: req.body.description,
    brand: req.body.brand,
  };

  Clothing.create(clothing).then((data) => {
    res.send(data);
  });
};

exports.findAll = (req, res) => {
  Clothing.findAll().then((data) => {
    res.send(data);
  });
};

exports.findOne = (req, res) => {};

exports.update = (req, res) => {
  const id = req.params.id;

  Clothing.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Clothing.destroy({ where: { id: id } }).then(() => {
    console.log("Se borró la prenda.");
  });
};
