const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {};

app.get('/oneFish', (req, res) => {
	console.log(req.body);
	res.json("Got your request! I don't have any files to send back though :(");
});

app.post('/twoFish', (req, res) => {
	const words = req.body.words;
	database.data = words;
	console.log(database);
	res.json("I've put your info in the database");
});

app.put('/redFish', (req, res) => {
	const update = req.body.words;
	database.data = update;
	console.log(database);
	res.json("I've updated your info");
});

app.delete('/blueFish', (req, res) => {
	const del = req.body.words;
	if (database.data = del) {
		delete database.data;
		console.log(database);
		res.json("I've deleted your info");
	}
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App is running on port ${process.env.PORT}`)
});