/**
 * @swagger
 * tags:
 *   name: Registro
 *   description: Endpoints relacionados con ciudades
 */

/**
 * @swagger
 * /api/registro:
 *   post:
 *     summary: Crear una nueva ciudad
 *     description: Crear una nueva ciudad con la información proporcionada
 *     tags: [Registro]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             nombre: Nombre de la Ciudad
 *             poblacion: Población de la Ciudad
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
 * /api/registro:
 *   get:
 *     summary: Obtener todas las ciudades
 *     description: Recuperar información sobre todas las ciudades
 *     tags: [Registro]
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             example:
 *               ciudades: [Lista de registro]
 */

/**
 * @swagger
 * /api/registro/{idRegistro}:
 *   get:
 *     summary: Obtener información de una ciudad
 *     description: Recuperar información detallada sobre una ciudad específica
 *     tags: [Registro]
 *     parameters:
 *       - in: path
 *         name: idRegistro
 *         description: ID de la ciudad a recuperar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             example:
 *               ciudad: Información de la ciudad
 */

/**
 * @swagger
 * /api/registro/{idRegistro}:
 *   put:
 *     summary: Actualizar información de una ciudad
 *     description: Actualizar la información de una ciudad específica con los datos proporcionados
 *     tags: [Registro]
 *     parameters:
 *       - in: path
 *         name: idRegistro
 *         description: ID de la ciudad a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             nombre: Nuevo nombre de la Ciudad
 *             poblacion: Nueva población de la Ciudad
 *     responses:
 *       200:
 *         description: Ciudad actualizada exitosamente
 *         content:
 *           application/json:
 *             example:
 *               message: Ciudad actualizada
 */

/**
 * @swagger
 * /api/registro/{idRegistro}:
 *   delete:
 *     summary: Eliminar una ciudad
 *     description: Eliminar una ciudad específica según su ID
 *     tags: [Registro]
 *     parameters:
 *       - in: path
 *         name: idRegistro
 *         description: ID de la ciudad a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ciudad eliminada exitosamente
 *         content:
 *           application/json:
 *             example:
 *               message: Ciudad eliminada
 */

import { Router } from 'express'
import { registroController } from '../controllers/register.controller'

const router = Router()

router.post('/registro', registroController.nuevoRegistro)
router.get('/registro', registroController.mostrarTodosLosRegistro)
router.get('/registro/:idRegistro', registroController.mostrarRegistro)
router.put('/registro/:idRegistro', registroController.actualizarRegistro)
router.delete('/registro/:idRegistro', registroController.eliminarRegistro)

export default router
