const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const request = require('request');
const workouts = require('./Data_Store/workoutDB')
require('dotenv').config();
//To have site available on a domain (free) download heroku here:
//	https://devcenter.heroku.com/articles/heroku-cli
// then 



//Development mode:
//Step 1:
//	a)Navigate into pacakge.json folder and remove this (add if production mode) from line 5:
//	  "proxy": "http//localhost:8000", 

//	b) on line 18
//		replace		"start": "nodemon backend/server.js"
//		with  		"start": "react-scripts start"


/*** if production mode: ***/
//	b) replace 		"start": "react-scripts start"
//	   with  		"start": "nodemon backend/server.js"


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


//Step 2:
//Comment this line out (in for production)
app.use(express.static(__dirname + './../build'))

app.listen(process.env.PORT || 8000, () => {
	console.log('Server Started on ' + process.env.PORT );
	console.log('Press CTRL + C to stop server');
});
app.use(bodyParser.json())

app.get('/currentPart/:part', (req, res) => {
	console.log(req.params.part + " was clicked")
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
//Comment this request out (in for production mode). Must always be the last line in server file
app.get('*', (req, res) => {
	res.sendFile('index.html',{root: __dirname + './../build'})
	});
	
//Step 4:
// Go into App.js and change server requests  (see commented lines above axios.get requests)

//Step 5:
//Enter the following commands in terminal
//	git add .
//	git commit -m " "
//	git push heroku master
//	heroku open