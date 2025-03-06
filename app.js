import express from 'express';
import router from './router/router.js';



const app = express();

app.set('view engine', 'ejs'); 

app.use(express.urlencoded({extended: false})); //para que pueda recibir datos de formularios
app.use(express.json());//para que pueda recibir datos en formato json

app.use(router);

app.listen(3000)
console.log('Server running at http://localhost:3000/');