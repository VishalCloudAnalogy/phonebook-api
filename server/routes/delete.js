const express = require('express');
const router = express.Router();
const ManageUsers = require("../mock/users");

router.delete('/:id', (req, res, next) => {
  const UserList = ManageUsers.UserList;
  const userToBeDeletedIndex = UserList.findIndex(user => user.id === req.params.id);
  if (userToBeDeletedIndex > -1) {
    ManageUsers.UserList = UserList.filter(user => user.id !== req.params.id);
    res.json({response: 'success'});
  } else {
    res.status(404).json({error: "User with id:" + req.params.id + " not found."});
  }
});

module.exports = router;
