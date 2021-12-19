const express = require('express');

const routeAddress = require('../controllers/bookaddress');

const router = express.Router();

router.get('/', routeAddress.getAddress);
router.get('/:id', routeAddress.getAddressById);
router.post('/', routeAddress.createAddress);
router.patch('/:id', routeAddress.updateAddress);
router.delete('/:id', routeAddress.deleteAddress);

module.exports = router;
