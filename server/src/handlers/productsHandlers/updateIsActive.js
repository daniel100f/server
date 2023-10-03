const { Products } = require('../../db');

const updateActive = async (req, res) => {
  const { isActive } = req.query; // Obtener ordenId y estado de la consulta
  const {id} = req.params
  try {
    const Producto = await Products.findOne({
      where: { id }
    });

    if (!Producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }

    await Producto.update({ isActive:isActive });

    res.json({ message: "isActive actualizado" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { updateActive };