const asyncHandler = require("express-async-handler");

const Goal = require("../model/models");

// Get request (READ)
const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find();
	res.status(200).json(goals);
});

// Put request (CREATE)
const setGoals = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("Please add a text field");
	}

	const goal = await Goal.create({
		text: req.body.text,
	});
	res.status(200).json(goal);
});

// Update request (UPDATE)
const updateGoals = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);

	if (!goal) {
		res.status(400);
		throw new Error("Goal not found!");
	}

	const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.status(200).json(updatedGoal);
});

// Delete request (DELETE)
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
		res.status(400);
		throw new Error("Goal not found!");
	}

    await goal.deleteOne()
	res.status(200).json({ id: req.params.id });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
