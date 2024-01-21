/**
 * @swagger
 * tags:
 *   name: Paises
 *   description: Endpoints relacionados con Paises
 */

/**
 * @swagger
 * /api/pais:
 *   post:
 *     summary: Crear una nueva ciudad
 *     description: Crear una nuevo pais con la información proporcionada
 *     tags: [Paises]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             nombre: Nombre del pais
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
 * /api/pais:
 *   get:
 *     summary: Obtener todas las ciudades
 *     description: Recuperar información sobre todas las ciudades
 *     tags: [Paises]
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             example:
 *               ciudades: [Lista de paises]
 */

/**
 * @swagger
 * /api/pais/{idPais}:
 *   get:
 *     summary: Obtener información de una ciudad
 *     description: Recuperar información detallada sobre una ciudad específica
 *     tags: [Paises]
 *     parameters:
 *       - in: path
 *         name: idPais
 *         description: ID del pais a recuperar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             example:
 *               ciudad: Información del pais
 */

/**
 * @swagger
 * /api/pais/{idPais}:
 *   put:
 *     summary: Actualizar información de una ciudad
 *     description: Actualizar la información de un pais específico con los datos proporcionados
 *     tags: [Paises]
 *     parameters:
 *       - in: path
 *         name: idPais
 *         description: ID del pais a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             nombre: Nuevo nombre de la Ciudad
 *     responses:
 *       200:
 *         description: Pais actualizado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               message: Pais actualizada
 */

/**
 * @swagger
 * /api/pais/{idPais}:
 *   delete:
 *     summary: Eliminar una ciudad
 *     description: Eliminar un pais específica según su ID
 *     tags: [Paises]
 *     parameters:
 *       - in: path
 *         name: idPais
 *         description: ID del pais a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pais eliminado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               message: Pais eliminado
 */

import { Router } from 'express'
import { paisController } from '../controllers/country.controller'

const router = Router()

router.post('/pais', paisController.nuevoPais)
router.get('/pais', paisController.mostrarPaises)
router.get('/pais/:idPais', paisController.mostrarPais)
router.put('/pais/:idPais', paisController.actualizarPais)
router.delete('/pais/:idPais', paisController.eliminarPais)

export default router
