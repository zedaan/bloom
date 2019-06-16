import express from 'express'
import testRouter from './resources/test/test.router'
const router = express.Router()

router.get('/', function(req, res){
  res.json({ message: 'this is api root' })
})
router.use('/test', testRouter)

export default router
