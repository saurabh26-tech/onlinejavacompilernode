import express from 'express';
import clipboardy from 'clipboardy';
import fs from 'fs';

const app = express();
const port = 3000;

app.get('/load/:file', async (req, res) => {
  const fileName = req.params.file;
  const filePath = `./${fileName}.txt`;
  try {
    const textToCopy = fs.readFileSync(filePath, 'utf-8');
    clipboardy.writeSync(textToCopy);
    res.send(`File '${fileName}.txt' loaded and copied to clipboard`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading file');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
