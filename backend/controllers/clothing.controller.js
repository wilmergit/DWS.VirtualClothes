const db = require("../models");
const Clothing = db.clothing;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const clothing = {
    description: req.body.description,
    brand: req.body.brand,
    size: req.body.size,
    price: req.body.price,
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

exports.update = (req, res) => {};

exports.delete = (req, res) => {
  const id = req.params.id;

  Clothing.destroy({ where: { id: id } }).then(() => {
    console.log("Se borró la prenda.");
  });
};
