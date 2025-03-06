import { conexion } from "../database/db.js";

export async function save (req, res) {
    const user = req.body.user;
    const rol = req.body.rol;

    // logica para guardar en la base de datos
    conexion.query('insert into users set ?',{user:user, rol:rol}, (error, results) => {
        if (error) {
            console.log(error);
            
        } else {
            res.redirect('/');
        }
    });
};

