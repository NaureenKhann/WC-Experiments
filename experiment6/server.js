// server.js
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.post('/calculate', (req, res) => {
  const { num1, num2, operator } = req.body;
  let result;

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  switch (operator) {
    case '+': result = n1 + n2; break;
    case '-': result = n1 - n2; break;
    case '*': result = n1 * n2; break;
    case '/': result = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero'; break;
    default: result = 'Invalid Operator';
  }

  res.send(`<h2>Result: ${result}</h2><a href="/">Go Back</a>`);
});

app.listen(3000, () => console.log('Calculator running on http://localhost:3000'));
