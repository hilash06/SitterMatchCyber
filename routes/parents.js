const express = require('express');
const router = express.Router();
const parentsController = require('../controllers/parents');

router.get('/', parentsController.getParents);
router.get('/toddlers', parentsController.getParentsWithToddlers);
router.post('/', parentsController.createParent);
router.put('/:id', parentsController.updateParent);
router.delete('/:id', parentsController.deleteParent);

module.exports = router;