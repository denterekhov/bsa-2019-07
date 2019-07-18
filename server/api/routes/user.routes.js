import { Router } from 'express';
const fs = require('fs');

const router = Router();

router
    .get('/', (req, res, next) => {
        fs.readFile('./api/data/userList.json', 'utf-8', (err, userList) => {
            if (err) {
                console.log('File read failed:', err);
                return;
            };

            res.status(200).json(JSON.parse(userList));
        })
    })

    .post('/', (req, res, next) => {
        fs.readFile('./api/data/userList.json', 'utf-8', (err, userList) => {
            if (err) {
                console.log('File read failed:', err);
                return;
            };
            const newUserList = [...JSON.parse(userList), req.body];
            fs.writeFile('./api/data/userList.json', JSON.stringify(newUserList, null, 2), (err) => {
                if (err) console.log('File write failed:', err);
                return;
            });
            res.status(201).json(req.body);
        })
    })

    .put('/:id', (req, res, next) => {
        fs.readFile('./api/data/userList.json', 'utf-8', (err, userList) => {
            if (err) {
                console.log('File read failed:', err);
                return;
            };
            const idToUpdate = req.params.id.split(':')[1];
            const newUserList = JSON.parse(userList).map(user => user.id !== idToUpdate ? user : {
                ...req.body
            });
            fs.writeFile('./api/data/userList.json', JSON.stringify(newUserList, null, 2), (err) => {
                if (err) console.log('File write failed:', err);
                return;
            });
            res.status(200).json(req.body);
        })
    })

    .delete('/:id', (req, res, next) => {
        fs.readFile('./api/data/userList.json', 'utf-8', (err, userList) => {
            if (err) {
                console.log('File read failed:', err);
                return;
            };
            const idToRemove = req.params.id.split(':')[1];
            const newUserList = JSON.parse(userList).filter(user => user.id !== idToRemove);
            fs.writeFile('./api/data/userList.json', JSON.stringify(newUserList, null, 2), (err) => {
                if (err) console.log('File write failed:', err);
                return;
            });
            res.status(200).end();
        })
    })

export default router;
