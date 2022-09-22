import { pool } from '../db.js';

export const getEmpleados = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM empleado");
        res.send(rows);
    } catch (err) {
        return res.status(500).json({status:"Algo ha salido mal, intentalo nuevamente."})
    }
};

export const getOneEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query(`SELECT * FROM empleado WHERE id=${id}`);
        if (rows.length === 0) return res.status(404).json({ status: "Empleado no registrado." });
        res.status(200).send(rows[0])

    } catch (err) {
            return res.status(500).json({status:"Algo ha salido mal, intentalo nuevamente."})

    }
};

export const postEmpleado = async (req, res) => {
    try {
        const { nombre, salario } = req.body;
        const [rows] = await pool.query("INSERT INTO empleado (nombre,salario) VALUES(?,?)", [nombre, salario]);
        res.status(200).send({
            status: "Empleado Agregado.",
            id: rows.insertId,
            nombre,
            salario
        });
    } catch (err) {
            return res.status(500).json({status:"Algo ha salido mal, intentalo nuevamente."})

    }
};

export const putEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, salario } = req.body;
        const [rows] = await pool.query(`UPDATE empleado SET nombre = IFNULL(?,nombre) ,salario = IFNULL(?,salario) WHERE id= ${id}`, [nombre, salario]);
        if (rows.affectedRows === 0) return res.status(404).json({ status: "Empleado no registrado." });
        //Obtener dato actualizado
        getOneEmpleado(req, res)
    } catch (err) {
        return res.status(500).json({status:"Algo ha salido mal, intentalo nuevamente."})
    }
}

export const deleteEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const [r] = await pool.query(`DELETE FROM empleado WHERE id=${id}`)
        if (r.affectedRows === 0) return res.status(404).json({ status: "Empleado no registrado." })
        res.status(200).send({
            status: "Empleado Eliminado.",
        })
    } catch (err) {
            return res.status(500).json({status:"Algo ha salido mal, intentalo nuevamente."})

    }
};
