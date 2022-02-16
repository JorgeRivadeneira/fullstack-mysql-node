import express from 'express'
import cors from 'cors'

//importamos la conexion a la bdd
import db from './database/db.js'

import blogRoutes from './routes/routes.js'

const PORT = process.env.PORT || 8000

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors())
app.use(express.json())
app.use('/blogs',  blogRoutes)



try {
    await db.authenticate()
    console.log('Conexion exitosa a la bdd')
} catch (error) {
    console.log(error);
}



app.get('/', (req, res) => {
    console.log('entro en el GET');
    res.send('Hola Mundo GET')
})


app.listen((PORT), () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})