'use strict'
var path = require('path')
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var correo = require('./correo.js');

exports.enviarCorreo = function(req, res) {
console.log('Inicio CREAR CORREO');
    console.log(req.body)
    console.log("Enter a Enviar Correo")
    var options = {
        service: 'SendGrid',
        auth: {
            api_user: 'MY_USER',
            api_key: 'MY_KEY'
        }
    }
    var client = nodemailer.createTransport(sgTransport(options));
    console.log("Entre a Enviar Correo")
    console.log("Envio con promesa")
    var informacion = req.body;
    var myhtml = correo.correo(informacion.nombre,informacion.correo,informacion.mensaje)
    var informacion = req.body;
    console.log("esta es la info del post-->" + JSON.stringify(informacion))
    var emailAdmin = {
        from: 'contacto@manucastrillonm.com',
        to: 'manu.cm43@gmail.com',
        subject: "Te dejaron un mensaje en manucastrillonm.com",
        html: myhtml
    }
