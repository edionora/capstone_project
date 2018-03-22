const express = require('express')
const app = express();
const songs = require('./workoutDB');
const bodyParser = require('body-parser');
const axios = require('axios');
const request = require('request');
const workouts = require('./workoutDB')
require('dotenv').config();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(8000, () => {
	console.log('Server Started on http://localhost:8000');
	console.log('Press CTRL + C to stop server');
});
app.use(bodyParser.json())
let workoutDb = []

app.get('/currentPart/:part', (req, res) => {
	console.log(req.params.part)
	for (var i = 0; i < workouts.length; i++){
		if (workouts[i].group == req.params.part)
		{
			res.send(workouts[i])
		}
	}
})

app.get('/key', (req, res) => {
	res.send(process.env.Dev_Key)
	console.log(process.env.Dev_Key)
})