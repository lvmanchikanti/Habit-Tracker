var collection = require("../controllers/collectionController.js"),
  express = require("express"),
  router = express.Router();

// collections/
router
  .route("/")
  .get(collection.listAll) //gets all collections
  .post(collection.create);

// collections/id/
router.route("/:_id").get(collection.read);

//router.router("/:_id/habitId").get(collection.retrieveHabits);

module.exports = router;
