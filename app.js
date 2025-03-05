import express from 'express';
import router from './router/router.js';



const app = express();

app.set('view engine', 'ejs'); 

app.use(router);
app.listen(3000 ,(req, res) => {
    console.log('Server is running on port 3000');
});