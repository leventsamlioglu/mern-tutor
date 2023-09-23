const getGoals = (req, res) => {
	res.status(200).json({ message: "Get goals" });
};
const setGoals = (req, res) => {
	res.status(200).json({ message: "Set goal" });
};
const updateGoals = (req, res) => {
	res.status(200).json({ message: `Update goal ${req.params.id}` });
};
const deleteGoals = (req, res) => {
	res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
