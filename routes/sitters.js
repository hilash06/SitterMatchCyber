const express = require('express');
const router = express.Router();
const sittersController = require('../controllers/sitters');

router.get('/', sittersController.getSitters);
router.get('/affordable', sittersController.getAffordableSitters);
router.post('/', sittersController.createSitter);
router.put('/:id', sittersController.updateSitter);
router.delete('/:id', sittersController.deleteSitter);

module.exports = router;