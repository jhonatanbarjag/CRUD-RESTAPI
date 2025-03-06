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

//funcion para editar usuarios
export async function update (req, res) {
    const id = req.params.id;
    const user = req.body.user;
    const rol = req.body.rol;

    //logica para actualizar en la base de datos
    conexion.query ('update users set ? where id = ?', [{user:user, rol:rol}, id], (error, results) => {
        if (error) {
            console.log(error);
            
        } else {
            console.log("actualizacion exitosa " , results);
            res.redirect('/');
        }
    });

}   

