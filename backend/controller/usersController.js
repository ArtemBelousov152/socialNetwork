const fs = require('fs');
const {v4} = require('uuid');

class UsersController {
    async getUser(req, res) {
        const url = req.body;
        res.json(url);
    }

    async registerUser(req, res) {
        let haveUser = false;
        const users = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
        users.users.forEach(user => {
            if(user.email === req.body.email) {
                haveUser = true
            }
        });
        // const obj = {   
        //             id: v4(),
        //             email: req.body.email,
        //             password: req.body.password,
        //             name: ""
        // }

    //    users.users.push(obj);
    //    fs.writeFile('./db.json', JSON.stringify(users), error => console.log(error))
       console.log(haveUser);
    }
}

module.exports = new UsersController();