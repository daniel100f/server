// ruta usuarios
const { Router } = require("express");
const userRouter = Router();

const { productAllHandler } = require("../handlers/productsHandlers/productAllHandler");
const { productCreate } = require("../handlers/productsHandlers/productCreate");
const { deleteProduct } = require("../handlers/productsHandlers/deleteProduct");
const { searchProduct } = require("../handlers/productsHandlers/searchProduct");
const { updateProduct } = require("../handlers/productsHandlers/updateProduct");
const {updateActive} = require ("../handlers/productsHandlers/updateIsActive")


// endpoints: ruta de acceso a nuestro backend;
userRouter.get("/search",searchProduct)
userRouter.get("/", productAllHandler);
userRouter.post("/create",productCreate)
userRouter.delete("/:id",deleteProduct)
userRouter.put("/update/:id",updateProduct)
userRouter.put("/active/:id",updateActive)


module.exports = userRouter;
