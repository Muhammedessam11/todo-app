const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3002;

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory array to store tasks
let tasks = [];

// Route to get the tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Route to add a new task
app.post('/tasks', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.redirect('/');
});

// Route to delete a task
app.post('/delete-task', (req, res) => {
  const taskToDelete = req.body.taskToDelete;
  tasks = tasks.filter(task => task !== taskToDelete);
  res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

