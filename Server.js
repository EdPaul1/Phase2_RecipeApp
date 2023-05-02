const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// route to fetch list of recipes
app.get('/recipes', async (req, res) => {
  try {
    const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
