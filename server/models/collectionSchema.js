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
    userIds: [{
        type: String
    }],
    habitIds: [{
        type: String
    }]

});

var Collection = mongoose.model("Collection", Collection);

module.exports = Collection;