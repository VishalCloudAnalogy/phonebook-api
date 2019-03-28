const faker = require('faker');
const ManageUsers = {};

ManageUsers.UserList = [];

ManageUsers.initializeUserList = (count) => {
    for (let i = 0; i < count; i++) {
        ManageUsers.UserList.push({
            id: faker.random.uuid(),
            name: faker.name.findName(),
            phone: faker.phone.phoneNumber()
        });
    }
};

module.exports = ManageUsers;
