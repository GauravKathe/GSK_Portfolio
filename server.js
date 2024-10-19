import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors'; // Import cors

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route to handle form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const newContact = { name, email, message, date: new Date() };

  const filePath = path.join(__dirname, 'data.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.writeFile(filePath, JSON.stringify([newContact]), (writeErr) => {
          if (writeErr) {
            console.error(writeErr); // Log the error
            return res.status(500).json({ error: 'Failed to save contact.' });
          }
          return res.status(201).json({ message: 'Contact saved successfully!' });
        });
      } else {
        console.error(err); // Log the error
        return res.status(500).json({ error: 'Failed to read data file.' });
      }
    } else {
      const entries = JSON.parse(data || '[]');
      entries.push(newContact);

      fs.writeFile(filePath, JSON.stringify(entries), (writeErr) => {
        if (writeErr) {
          console.error(writeErr); // Log the error
          return res.status(500).json({ error: 'Failed to save contact.' });
        }
        res.status(201).json({ message: 'Contact saved successfully!' });
      });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
