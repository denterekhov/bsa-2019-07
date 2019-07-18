import { Router } from 'express';
const fs = require('fs');

const router = Router();

router
    .post('/', (req, res, next) => {
        const { login, password } = req.body;
        fs.readFile('./api/data/userList.json', 'utf-8', (err, userList) => {
            if (err) {
                console.log('File read failed:', err);
                return;
            };
            const selectedUser = JSON.parse(userList).find(user => user.name === login && user.password === password);
            if (!selectedUser) {
                res.status(404).send("User doesn\'t exist")
            } else {
                selectedUser.role === 'admin'
                    ? res.status(200).json({isAuthenticated: true, isAdmin: true})
                    : res.status(200).json({isAuthenticated: true, isAdmin: false});
            }
        })
    })

export default router;
