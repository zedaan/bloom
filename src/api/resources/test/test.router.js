import express from 'express'

const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ message: 'this is test root' })
})

export default router
