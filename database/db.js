import mysql from 'mysql';

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root321',
    database: 'crud_nodejs_db'
});

conexion.connect((error) => {
    if (error) {
        
        throw error;
        
    } else  {
        console.log('Conexión exitosa');
    }
    
    
})

export { conexion };