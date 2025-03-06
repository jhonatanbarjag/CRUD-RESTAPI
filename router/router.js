import { Router } from "express";
import { conexion } from "../database/db.js";
import { save } from "../controllers/crud.js";
import { update } from "../controllers/crud.js";

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
//ruta para guardar usuarios
router.post('/save', save);

//ruta para editar usuarios
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('select * from users where id = ?', [id], (error, results) => {
        if (error) {
            throw error;
            
        } else {
            res.render('edit', {user:results[0]});
        }
    });
    
});
//ruta para actualizar usuarios
router.post('/update/:id', update);


//ruta para eliminar usuarios
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('delete from users where id = ?', [id], (error, results) => {
        if (error) {
            throw error;
            
        } else {
            console.log('Usuario eliminado');
            res.redirect('/');
        }
    });
}
);




export default router;