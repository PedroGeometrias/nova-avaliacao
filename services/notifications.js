const nodemailer = require('nodemailer');
require('dotenv').config();

// Configuração do transporte
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Função para enviar e-mails
async function sendEmail(to, subject, text) {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
        });
        console.log(`Email enviado: ${info.response}`);
        return info;
    } catch (error) {
        console.error(`Erro ao enviar e-mail: ${error.message}`);
        throw error;
    }
}

module.exports = { sendEmail };

