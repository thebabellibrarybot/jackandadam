const express = require('express');
const router = express.Router();

const Page = require('../controllers/pageController.js');

// read

router.get('/', Page.index);
router.post('/', Page.create);
router.get(':id', Page.show);
router.put('/', Page.update);
router.delete('/', Page.destroy);

module.exports = router;

