const res = require('express/lib/response');
const Usuario = require('../models/usuario')

module.exports = function (app){
    app.get('/Usuario', (req, res)=>{
        Usuario.getUsuarios((err, data) =>{
            res.status(200).json(data); 
        });
    });

  app.get('/Usuario/:user_name', (req, res)=>{
      Usuario.getUsuariosLogin(req.params.user_name, (err, data) =>{
          res.status(200).json(data); 
      });
  });

    app.post('/Usuario', (req, res)=>{
        const usuarioData = {
            id_usuario: null, 
            user_name: req.body.user_name,
            password: req.body.password,
            puntaje: req.body.puntaje
        };
        Usuario.insertUsuario(usuarioData, (err, data)=>{
            if(data && data.insertId){
                res.status(200).json({
                  success: true,
                  msg: 'Usuario registrado',
                  data: data
                })
              }else{
                res.status(500).json({
                  success: false,
                  msg: 'Error'
                });
              }
        });
    });
}