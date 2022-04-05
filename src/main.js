/* npm init -y
   npm i
   npm install express
   npm install express-handlebars
*/
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.set('views', './views')

app.get('/productos', (req, res) => {
    let productos = [
        {nombre: 'Escuadra', precio: 20, foto: "unafoto"}, 
        {nombre: 'Regla', precio: 10, foto: "otrafoto"}, 
        {nombre: 'Compás', precio: 20, foto: "masfoto"}
    ]
    res.render('productos', { productos })
})


/* ---- Server Listen ----- */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en el servidor ${error}`))