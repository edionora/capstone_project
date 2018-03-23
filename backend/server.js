const express = require('express')
const app = express();
const songs = require('./workoutDB');
const bodyParser = require('body-parser');
const axios = require('axios');
const request = require('request');
const workouts = require('./workoutDB')
const coreWorkouts = require('./coreDB')
require('dotenv').config();

//Development mode:
//Step 1:
//	a)Navigate into pacakge.json folder and add this on line 5:
//	  "proxy": "http//localhost:8000", 

//	b) replace 		"start": "nodemon backend/server.js"
//	   with  		"start": "react-scripts start"


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


//Step 2:
//Comment this line out
// app.use(express.static(__dirname + './../build'))

app.listen(process.env.PORT || 8000, () => {
	console.log('Server Started on ' + process.env.PORT );
	console.log('Press CTRL + C to stop server');
});
app.use(bodyParser.json())
let workoutDb = []

app.get('/currentPart/:part', (req, res) => {
	console.log("The body part " + req.params.part + " was clicked")
	for (var i = 0; i < workouts.length; i++){
		if (workouts[i].group == req.params.part)
		{
			res.send(workouts[i])
		}
	}
})



app.get('/key', (req, res) => {
	res.send(process.env.Dev_Key)
})

//Step 3:
//Comment this request out
// app.get('*', (req, res) => {
// 	res.sendFile('index.html',{root: __dirname + './../build'})
// 	});
	

//Step 4:
// Go into App.js and change server requests  (see commented lines above axios.get requests)

