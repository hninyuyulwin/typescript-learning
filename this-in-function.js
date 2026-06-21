"use strict";
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
user.becomeAdmin();
console.log("user : ", user);
function getDB() {
    const db = {
        users: [
            { id: 1, admin: false },
            { id: 2, admin: true },
        ],
        filterUsers(filter) {
            let result = [];
            for (const user of this.users) {
                if (filter.call(user)) {
                    result.push(user);
                }
            }
            return result;
        },
    };
    return db;
}
let result = getDB().filterUsers(() => user.admin);
console.log("Result : ", result);
