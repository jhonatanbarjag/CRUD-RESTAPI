import { Router } from "express";
import { conexion } from "../database/db.js";

const router = Router();


router.get('/', (req, res) => {
    conexion.query('select * from users', (error , results) => {
        if (error) {
            throw error;
            
        } else {
            res.json(results);
        }
})
});

export default router;