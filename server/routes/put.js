const express = require('express');
const router = express.Router();
const ManageUsers = require("../mock/users");

router.put('/', (req, res, next) => {
    const id = req.body.id;
    if(id) {
        const name = req.body.name;
        const phone = req.body.phone;
        const UserList = ManageUsers.UserList;
        const userToBeUpdatedIndex = UserList.findIndex(user => user.id === id);
        if(userToBeUpdatedIndex > -1) {
            const userToBeUpdated = UserList[userToBeUpdatedIndex];
            userToBeUpdated.name = name;
            userToBeUpdated.phone = phone;
            ManageUsers.UserList[userToBeUpdatedIndex] = userToBeUpdated;
            res.json(userToBeUpdated);
        } else {
            res.status(404).json({error: "User with id:" + req.params.id + " not found."});
        }
    } else {
        res.status(400).json({error: "Id field is required to update a user."});
    }
});

module.exports = router;
