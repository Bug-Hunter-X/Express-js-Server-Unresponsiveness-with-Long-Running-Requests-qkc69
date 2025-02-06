const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    const result = await longRunningTask(); // Simulate a long-running task asynchronously
    res.send('Hello World! ' + result);
  } catch (error) {
    res.status(500).send('Error');
  }
});

async function longRunningTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('This is async');
    }, 5000);
  });
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});