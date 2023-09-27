const asyncHandler = require("express-async-handler");

const Goal = require("../model/models");

const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find();
	res.status(200).json(goals);
});

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

const updateGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Update goal ${req.params.id}` });
});

const deleteGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
