const path = require('path')
const express = require('express')


const app = express()

const publicDirectoryPath = path.join(__dirname , '../public')
app.use(express.static(publicDirectoryPath))
app.get("/PlayGames",function(req,res){
	res.sendFile(__dirname+"/Play/PlayGames.html")
})
app.get("/Contact",function(req,res){
	res.sendFile(__dirname+"/Play/footer/test.html")
})
app.get("/About",function(req,res){
	res.sendFile(__dirname+"/Play/footer/test.html")
})
app.listen(process.env.PORT || 3000,()=>{
	console.log('Server on 3000 avialible')
})