const connection= require('../models/connection')

let usuarioModel = {}; 


//Obtención de todos los usuarios
usuarioModel.getUsuarios = (callback) =>{
    if(connection){
        connection.query('SELECT * FROM USUARIO ORDER BY id_usuario',
        (err, rows)=>{ 
            if(err){
                throw err;
            }else{
                callback(null, rows);
            }
        });
    }
};


// Login de usuarios
usuarioModel.getUsuariosLogin = (user_name, callback) =>{
    if(connection){
        connection.query('SELECT * FROM USUARIO WHERE USUARIO.user_name ="'+user_name+'" ',
        (err, rows)=>{ 
            if(err){
                throw err;
            }else{
                callback(null, rows);
            }
        });
    }
};


// Registro de usuarios
usuarioModel.insertUsuario = (usuarioData, callback) =>{
    if(connection){
        connection.query(
            'INSERT INTO USUARIO SET ?', usuarioData,
            (err, result) =>{
                if(err){
                    throw err;
                }else{
                    callback(null, {
                        'insertId': result.resultId
                    });
                }
            }
        )
    }
};

module.exports = usuarioModel; 