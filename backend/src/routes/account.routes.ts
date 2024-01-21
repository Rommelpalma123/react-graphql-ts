/**
 * @swagger
 * tags:
 *   name: TipoCuenta
 *   description: Endpoints relacionados con cuentas
 */

/**
 * @swagger
 * /api/tipocuenta:
 *   post:
 *     summary: Crear una nueva ciudad
 *     description: Crear una nueva ciudad con la información proporcionada
 *     tags: [TipoCuenta]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             nombre: Nombre del cliente
 *             cedula: Cedula del cliente
 *             edad: Edad del cliente
 *             id_pais: id del pais
 *     responses:
 *       201:
 *         description: Ciudad creada exitosamente
 *         content:
 *           application/json:
 *             example:
 *               message: Ciudad creada
 */

/**
 * @swagger
 * /api/tipocuenta:
 *   get:
 *     summary: Obtener todas las ciudades
 *     description: Recuperar información sobre todas las ciudades
 *     tags: [TipoCuenta]
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             example:
 *               ciudades: [Lista de ciudades]
 */

/**
 * @swagger
 * /api/tipocuenta/{idTipocuenta}:
 *   get:
 *     summary: Obtener información de un cliente
 *     description: Recuperar información detallada sobre un cliente específica
 *     tags: [TipoCuenta]
 *     parameters:
 *       - in: path
 *         name: idTipocuenta
 *         description: ID del cliente a recuperar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             example:
 *               client: Información del cliente
 */

/**
 * @swagger
 * /api/tipocuenta/{idTipocuenta}:
 *   put:
 *     summary: Actualizar información de un cliente
 *     description: Actualizar la información de un cliente específico con los datos proporcionados
 *     tags: [TipoCuenta]
 *     parameters:
 *       - in: path
 *         name: idTipocuenta
 *         description: ID del cliente a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             nombre: Nombre del cliente
 *             cedula: Cedula del cliente
 *             edad: Edad del cliente
 *             id_pais: id del pais
 *     responses:
 *       200:
 *         description: Cliente actualizado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               message: Cliente actualizado
 */

/**
 * @swagger
 * /api/tipocuenta/{idTipocuenta}:
 *   delete:
 *     summary: Eliminar una ciudad
 *     description: Eliminar una ciudad específica según su ID
 *     tags: [TipoCuenta]
 *     parameters:
 *       - in: path
 *         name: idTipocuenta
 *         description: ID del cliente a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente eliminado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               message: Cliente eliminado
 */

import { Router } from 'express'
import { tipoCuentaController } from '../controllers/account.controller'

const router = Router()

router.post('/tipocuenta', tipoCuentaController.nuevoTipocuenta)
router.get('/tipocuenta', tipoCuentaController.mostrarTipocuentas)
router.get('/tipocuenta/:idTipocuenta', tipoCuentaController.mostrarTipocuenta)
router.put(
  '/tipocuenta/:idTipocuenta',
  tipoCuentaController.actualizarTipocuenta
)
router.delete(
  '/tipocuenta/:idTipocuenta',
  tipoCuentaController.eliminarTipocuenta
)

export default router
