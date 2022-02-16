import BlogModel from "../models/BlogModel.js";

//Métodos para el crud

//Mostrar todos los registros
export const getAllBlogs = async (req, res)=> {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs);
    } catch (error) {
        res.json({mensaje: error.message});
    }
}

//Mostrar un registro
export const   getBlog = async (req, res) => {
    console.log(req.params.id);
    try {
        const blog = await BlogModel.findAll({
            where:{
                id: req.params.id
            }
        })
        res.json(blog[0]);
    } catch (error) {
        res.json({mensaje: error.message});
    }
}

//Crear un registro
export const createBlog = async (req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        /*res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();*/
           

        await BlogModel.create(req.body);
        res.json({
            mensaje: "Registro Creado Correctamente"
        })
    } catch (error) {
        res.json({mensaje: error.message});
    }
}

//Actualizar un registro
export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            mensaje: "Registro Actualizado Correctamente"
        })        
    } catch (error) {
        res.json({mensaje: error.message});
    }
}

//Eliminar un registro
export const deleteBlog = async (req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');        
        await BlogModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            mensaje: "Registro Eliminado Correctamente"
        }) 
    } catch (error) {
        res.json({mensaje: error.message});
    }    
}