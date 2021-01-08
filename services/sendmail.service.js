const nodemailer = require("nodemailer");
class Mailer {
    constructor() { }
    async sendmail() {
        let testAccount = await nodemailer.createTestAccount();
        console.log('testAccount:', testAccount)
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'misael67@ethereal.email',
                pass: 's5sAQjfv9ERETTx3b8'
            }
        });
        console.log('transporter:', transporter)
        let info = await transporter.sendMail({
            from: "misael67@ethereal.emai", // sender address
            to: "morgan.casper@ethereal.email", // list of receivers
            subject: "nodemailer ✔", // Subject line
            text: "Plane Text :-- duggal", // plain text body
            html: "<b>HTML Text  :== HTML</b>", // html body
        });
        console.log('after send');
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
}
module.exports = Mailer;
