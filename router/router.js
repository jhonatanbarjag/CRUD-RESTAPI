import { Router } from "express";
import { conexion } from "../database/db.js";
import { save } from "../controllers/crud.js";

const router = Router();


router.get('/', (req, res) => {
    

    conexion.query('select * from users', (error , results) => {
        if (error) {
            throw error;
            
        } else {
            res.render('index', {results:results});
        }
})
});



//routa para agregar usuarios
router.get('/create', (req, res) => {
    
    res.render('create');
});
router.post('/save', save);




export default router;