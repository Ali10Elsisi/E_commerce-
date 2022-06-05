let mongoose = require('mongoose');

let categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [5, 'too short'],
        maxlength: 15,
    },
    pic: String,
    // has_discout: Boolean,
    // disount_value: {
    //     type: Number,
    //     required: function() {
    //         if (this.has_discout) {
    //             return true;
    //         }
    //     }
    // }
})



module.exports = categorySchema;