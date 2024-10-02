module.exports = (sequelize, Sequelize) => {
  const Clothing = sequelize.define("Clothing", {
    description: {
      type: Sequelize.STRING,
    },
    brand: {
      type: Sequelize.STRING,
    },
    size: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.FLOAT,
    },
  });

  return Clothing;
};
