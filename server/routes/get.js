const express = require('express');
const router = express.Router();
const ManageUsers = require("../mock/users");

router.get('/', (req, res, next) => {
    res.json(ManageUsers.UserList);
});
router.get('/:id', (req, res, next) => {
    const UserList = ManageUsers.UserList;
    const filteredUserIndex = UserList.findIndex(user => user.id === req.params.id);
    if(filteredUserIndex > -1) {
        res.json(UserList[filteredUserIndex]);
    } else {
        res.status(404).json({error: "User with id:" + req.params.id + " not found."});
    }
});

module.exports = router;
