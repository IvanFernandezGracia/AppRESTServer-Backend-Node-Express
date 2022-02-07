const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const Usuario = require("../models/usuario");

const usuariosGet = async (req = request, res = response, next) => {
  try {
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true }; //buscar elementos que tengan property key:value

    const [total, usuarios] = await Promise.all([
      Usuario.countDocuments(query),
      Usuario.find(query)
        .skip(!isNaN(Number(desde)) ? Number(desde) : 0)
        .limit(!isNaN(Number(limite)) ? Number(limite) : 5),
    ]);

    res.json({
      total,
      usuarios,
    });
  } catch (err) {
    next(err); // handleError middleware
  }
};

const usuariosPost = async (req = request, res = response, next) => {
  try {
    //   const { google, ...rest } = req.body;
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(); // mas vuelta encriptacion : 10 por defecto
    usuario.password = bcryptjs.hashSync(password, salt); // hash una sola via

    // Probando Error en try/catch
    // throw createError(505, "This is synchronous ERROR!");

    // Guardar en BD Mongo
    await usuario.save();

    res.json({
      usuario,
    });
  } catch (err) {
    next(err); // handleError middleware
  }
};

const usuariosPut = async (req, res = response, next) => {
  try {
    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    if (password) {
      // Encriptar la contraseña
      const salt = bcryptjs.genSaltSync();
      resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto, { new: true });
    // const usuario = await Usuario.findOneAndUpdate(id, resto);

    res.json(usuario);
  } catch (err) {
    next(err); // handleError middleware
  }
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API - usuariosPatch",
  });
};

const usuariosDelete = async (req, res = response) => {
  const { id } = req.params;

  // Fisicamente lo borramos
  // const usuario = await Usuario.findByIdAndDelete( id );

  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

  res.json(usuario);
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
