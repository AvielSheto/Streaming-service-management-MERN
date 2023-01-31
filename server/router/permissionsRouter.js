const express = require('express');
const router = express.Router();
const { getAllPermissions, getPermission, createPermission, deletePermission, updatePermission } = require('../controllers/permissionsControllers');

// Get All Permissions
router.get('/', getAllPermissions)






// Get All Permissions
// router.get('/', async (req, res) => {
//     try {
//         const permissions = await permissionsControllers.getAllPermissions();
//         res.status(200).json(permissions);
//     } catch (e) {
//         res.status(500).json(e);
//     }
// });

// Get permission by id
router.get('/:id', async (req, res) => {
    try {
        const permission = await permissionsControllers.getPermission(req.params.id)
        res.status(200).json(permission)
    } catch (e) {
        res.status(500).json(e);
    }
})

// POST
router.post('/', async (req, res) => {
    try {
        const permission = req.body;
        const status = await permissionsControllers.createPermission(permission);
        res.status(201).json(status);
    } catch (e) {
        res.status(500).json(e)
    }
})

// PUT
router.put('/:id', async (req, res) => {
    try {
        const permission = req.body;
        const status = await permissionsControllers.updatePermission(permission)
        res.status(201).json(status)
    } catch (e) {
        res.status(500).json(e)
    }
})

// DELETE
// Delete user
router.delete('/:id', async (req, res) => {
    try {
        const status = await permissionsControllers.deletePermission(req.params.id);
        res.status(200).json(status)
    } catch (e) {
        res.status(500).json(e);
    }
})

module.exports = router;