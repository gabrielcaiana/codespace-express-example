const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

// books example

const books = [
  {
    id: 1,
    title: 'The Hobbit',
  },
  {
    id: 2,
    title: 'The Lord of the Rings',
  },
];

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/books', (req, res) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
