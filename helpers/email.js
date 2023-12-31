import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
    
    const {email, nombre, token} = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });


    //Informacion Email
    
    const info = await transport.sendMail({
        from: ' "UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Comprueba tu Cuenta",
        text: "Comprueba tu Cuenta UpTask",
        html: `
            <p>Hola: ${nombre} Comprueba tu Cuenta en UpTask</p>
            <p>Tu Cuenta está casi lista, verificala en el siguiente enlace:
                <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
            </p>
            <p>Si tu no creaste la cuenta, puedes ignorar el mensaje</p>
        `
    })
}

export const emailOlvidePassword = async (datos) => {
    
    const {email, nombre, token} = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });


    //Informacion Email
    
    const info = await transport.sendMail({
        from: ' "UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Reestablece tu Password",
        text: "Reestablece tu Password",
        html: `
            <p>Hola: ${nombre} has solicitado reestablecer tu password</p>

            <p>Usa el siguiente enlace para generar un nuevo password:

                <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
            </p>

            <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
        `
    })
}