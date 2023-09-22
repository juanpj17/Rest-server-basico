import { response, request } from 'express';


const userGet = (req = request, res = response) => {

    const { q, nombre, appid, page = 1, limit = 5 } = req.query;

    res.json({
        msg: 'Mensaje enviado - controlador',
        q,
        nombre,
        appid,
        page,
        limit
    });
}

const userPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'Mensaje: metodo post recibido - controlador',
        nombre,
        edad
    });
}

const userPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'Mensaje: metodo put recibido - controlador',
        id
    });
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'Mensaje: metodo delete recibido - controlador'
    });
}

export{
    userGet,
    userPost,
    userPut,
    userDelete
}