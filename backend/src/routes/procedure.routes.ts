/**
 * @swagger
 * tags:
 *   name: Tramite
 *   description: Endpoints relacionados con Tramites
 */

/**
 * @swagger
 * /api/tramite:
 *   post:
 *     summary: Crear una nueva ciudad
 *     description: Crear una nueva ciudad con la información proporcionada
 *     tags: [Tramite]
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
 * /api/tramite:
 *   get:
 *     summary: Obtener todas las ciudades
 *     description: Recuperar información sobre todas las ciudades
 *     tags: [Tramite]
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
 * /api/tramite/{idTramite}:
 *   get:
 *     summary: Obtener información de una ciudad
 *     description: Recuperar información detallada sobre una ciudad específica
 *     tags: [Tramite]
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
 * /api/tramite/{idTramite}:
 *   put:
 *     summary: Actualizar información de una ciudad
 *     description: Actualizar la información de una ciudad específica con los datos proporcionados
 *     tags: [Tramite]
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
 * /api/tramite/{idTramite}:
 *   delete:
 *     summary: Eliminar una ciudad
 *     description: Eliminar una ciudad específica según su ID
 *     tags: [Tramite]
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
import { tramiteController } from '../controllers/procedure.controller'

const router = Router()

router.post('/tramite', tramiteController.nuevoTramite)
router.get('/tramite', tramiteController.mostrarTodosLosTramite)
router.get('/tramite/:idTramite', tramiteController.mostrarTramite)
router.put('/tramite/:idTramite', tramiteController.actualizarTramite)
router.delete('/tramite/:idTramite', tramiteController.eliminarTramite)

export default router
