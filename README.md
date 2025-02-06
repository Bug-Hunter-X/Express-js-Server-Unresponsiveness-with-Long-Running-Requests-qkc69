# Express.js Server Unresponsiveness with Long-Running Requests

This repository demonstrates a common issue in Express.js applications where long-running requests can cause the server to hang or become unresponsive.  The problem stems from blocking the event loop.

## Bug
The `bug.js` file contains an Express.js server with a route that simulates a long-running task using `setTimeout`.  This blocks the event loop, preventing the server from responding to other requests during this time.

## Solution
The `bugSolution.js` file demonstrates a solution using asynchronous operations (promises or async/await) or a worker thread to handle long-running tasks without blocking the event loop.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.
3. Send multiple requests to the server (e.g., using curl).
4. Observe that the server becomes unresponsive to subsequent requests until the initial request completes.

## How to Fix
Refer to `bugSolution.js` to see how to use async/await or a worker thread for handling time-consuming operations to avoid blocking the event loop and maintain server responsiveness.