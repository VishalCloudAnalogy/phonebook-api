const express = require('express');
const router = express.Router();
const ManageUsers = require("../mock/users");
const faker = require('faker');

router.post('/', (req, res, next) => {
    const name = req.body.name;
    const phone = req.body.phone;
    if(name && phone) {
        const User = {
            id: faker.random.uuid(),
            name,
            phone
        };
        ManageUsers.UserList.push(User);
        res.json(User);
    } else {
        res.status(400).json({error: 'Required fields are missing.'});
    }
});

module.exports = router;
