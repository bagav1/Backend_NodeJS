const User = require("../models/user.model.js");

// .../api/user

exports.getOne = (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontro el usuario con id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error al consultar el id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

exports.findByState = (req, res) => { };

exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Algo salio mal al tratar de obtener los datos de usuarios."
            });
        else res.send(data);
    });
};