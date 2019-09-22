var mongoose = require("mongoose");
Schema = mongoose.Schema;

new Collection = new Schema({
    collectionId: {
        type: String,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true
    },
    habits: [{
        type: String
    }]

});

var Collection = mongoose.model("collection", collectionSchema);

module.exports = Collection;