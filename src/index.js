import app from './server.js';

//Start
app.listen(app.get("PORT"), () => {
    console.log("Server on port " + app.get("PORT"))
})