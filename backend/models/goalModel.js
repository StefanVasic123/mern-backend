const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {
        // user asociated with the goal
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        text: {
            type: String,
            required: [true, 'Please add a text value']
        }
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Goal', goalSchema)