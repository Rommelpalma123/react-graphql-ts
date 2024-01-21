/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Endpoints relacionados con ciudades
 */

/**
 * @swagger
 * /api/v2/cliente/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Iniciar sesión con correo electrónico y contraseña
 *     tags: [Clientes]
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             email: correo@ejemplo.com
 *             password: contraseña
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             example:
 *               message: Inicio de sesión exitoso
 *               client: Información del cliente
 *       401:
 *         description: Credenciales incorrectas
 *         content:
 *           application/json:
 *             example:
 *               message: Credenciales incorrectas
 */

import { Router } from 'express'
import { clienteController } from '../controllers/client.controller'

export const router = Router()

router.post('/cliente/login', clienteController.iniciarSession)

export default router
