const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' })
})

// @desc Set goal
// @route SET /api/goals
// @access private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please Add Text Field")
    }

    res.status(200).json({ message: `Set goal` })
})

// @desc Update goals
// @route PUT /api/goals
// @access private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Goal ${req.params.id}` })
})

// @desc Delete goal
// @route DELETE /api/goal
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}