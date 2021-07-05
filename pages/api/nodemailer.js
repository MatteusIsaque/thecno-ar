var nodemailer = require('nodemailer');

export default function receber(req, res){

const {Nome, Numero, Texto} = req.body


if(!Nome || !Numero || !Texto){
  res.status(400).json({
    mensage:"dados não preenchido"
  })
}

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: `${process.env.USERMAIL}`,
    pass: `${process.env.PASSMAIL}`
  }
});

var mailOptions = {
  from: 'thecnoarcondicionado@gmail.com',
  to: 'thecnoarcondicionado@gmail.com',
  subject: 'Email recebido pela campanha',
  text:
   `
  Olá esse email chegou do site:
  Nome: ${Nome}
  Numero: ${Numero}
  Mensagem: ${Texto}

  Não responsa esse email!

  `
};

transporter.sendMail(mailOptions); 


}