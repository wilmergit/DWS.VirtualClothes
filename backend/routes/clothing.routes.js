module.exports = (app) => {
  const clothing = require("../controllers/clothing.controller.js");

  var router = require("express").Router();

  router.post("/", clothing.create);

  router.get("/", clothing.findAll);

  router.put("/:id", clothing.update);

  router.delete("/:id", clothing.delete);

  app.use('/api/clothing', router);
};
