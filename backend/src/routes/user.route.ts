import { Router } from 'express'

import { userController } from '../controllers/user.controller'
import { loginController } from '../controllers/login.controller'

const router = Router()

router.post('/registro/user', userController.create)
router.post('/login/user', loginController.login)

export default router
