import express from 'express';
import clipboard from 'clipboardy';
import fs from 'fs';
const app = express();
const port = 3000;

app.get('/load/:file', async (req, res) => {
  const fileName = req.params.file;
  const filePath = `./${fileName}.txt`;
  try {
    const textToCopy = fs.readFileSync(filePath, 'utf-8');
    clipboard.writeSync(textToCopy);
    res.send(`Error Loading Java Compiler`);
  } catch (err) {
    res.send(`Error Loading Java Compiler`);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
