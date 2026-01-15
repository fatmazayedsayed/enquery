const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // remove if using proxy

const DATA_FILE = path.join(__dirname, 'data', 'enquiries.json');

async function ensureDataFile() {
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, '[]', 'utf8');
  }
}

app.post('/api/enquiries', async (req, res) => {
  try {
    await ensureDataFile();
    const body = req.body;
    const raw = await fs.readFile(DATA_FILE, 'utf8');
    const list = JSON.parse(raw || '[]');
    list.push(body);
    await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), 'utf8');
    res.status(201).json(body);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to save enquiry' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API server running on http://localhost:${port}`));