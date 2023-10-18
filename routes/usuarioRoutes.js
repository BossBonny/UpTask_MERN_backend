import  express  from "express";
import  {   registrar,
            autenticar,
            confirmar,
            olvidePassword,
            comprobarToken,
            nuevoPassword,
            perfil
        }  from "../controllers/usuarioControllers.js";

import checkAuth from "../middleware/checkAuth.js";

const usuarioRoutes = express.Router();

//Autentificación, Registro y Confirmacion de Usuarios

usuarioRoutes.post('/', registrar); // Crear un nuevo usuario
usuarioRoutes.post('/login', autenticar);
usuarioRoutes.get('/confirmar/:token', confirmar);
usuarioRoutes.post('/olvide-password', olvidePassword);
usuarioRoutes.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);

usuarioRoutes.get('/perfil', checkAuth, perfil);

export default usuarioRoutes;