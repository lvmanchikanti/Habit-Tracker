var collection = require("../controllers/collectionController.js"),
  express = require("express"),
  router = express.Router();

// collections/
router
  .route("/")
  .get(collection.listAll) //gets all collections
  .post(collection.create)
  .put(collection.addHabitToGroup);

// collections/id/
router.route("/:_id").get(collection.read);

router.route("/deleteHabit").delete(collection.deleteHabit);

//Delete collection
// collection/delete/12345
router.route("/delete/:_id").delete(collection.deleteCollection);

//update collection
//collection/update/12345
router.route("/update/:_id").put(collection.editCollection);

module.exports = router;
