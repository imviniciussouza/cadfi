const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const db = require('./connection');
const User = require('./quoteModel');


//bodyparser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
	console.log('conetado e funcionando...')
});

app.get('/', (req,res) =>{
	res.render('index')
})
//página de pesquisa
app.get('/pesquisa', (req,res) =>{
	res.render('pesquisa')
})

//post method

app.post("/addname", (req, res) => {
	const myData = new User(req.body);
	myData.save()
	.then(item => {
	res.redirect('/');
	})
	.catch(err => {
	res.status(400).send("Houve um erro.");
	})
   })
//post to get data from server

app.post('/getUsers', async (req, res) =>{
	let payload = req.body.payload.trim();
	let search = await User.find({firstName: {$regex: new RegExp('^'+payload+'.*','i')}}).exec();
	//console.log(payload)

	//limitar resultados a 10
	search = search.slice(0,10);
	res.send({payload: search});
});

//pesquisar montante de divia

app.post('/getTotalDivida', async (req, res) =>{
	let payload = req.body.payload.trim();
	let search = await User.find({total: {$regex: new RegExp('^'+payload+'.*','i')}}).exec();
	//console.log(payload)

	//limitar resultados a 10
	search = search.slice(0,10);
	res.send({payload: search});
})