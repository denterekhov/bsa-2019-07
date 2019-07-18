import { Router } from 'express';
const fs = require('fs');

const router = Router();

router
    .get('/', (req, res, next) => {
        fs.readFile('./api/data/messageList.json', 'utf-8', (err, messageList) => {
            if (err) {
                console.log('File read failed:', err);
                return;
            };
            res.status(200).json(JSON.parse(messageList));
        })
    })

    .post('/', (req, res, next) => {
        fs.readFile('./api/data/messageList.json', 'utf-8', (err, messageList) => {
            if (err) {
                console.log('File read failed:', err);
                return;
            };
            const newMessageList = [...JSON.parse(messageList), req.body];
            fs.writeFile('./api/data/messageList.json', JSON.stringify(newMessageList, null, 2), (err) => {
                if (err) console.log('File write failed:', err);
                return;
            });
            res.status(201).json(req.body);
        })
    })

    .put('/:id', (req, res, next) => {
        fs.readFile('./api/data/messageList.json', 'utf-8', (err, messageList) => {
            if (err) {
                console.log('File read failed:', err);
                return;
            };
            const idToUpdate = req.params.id.split(':')[1];
            const newMessageList = JSON.parse(messageList).map(message => message.id !== idToUpdate ? message : {
                ...message, 
                message: req.body.text
            });
            fs.writeFile('./api/data/messageList.json', JSON.stringify(newMessageList, null, 2), (err) => {
                if (err) console.log('File write failed:', err);
                return;
            });
            res.status(200).json(req.body);
        })
    })

    .delete('/:id', (req, res, next) => {
        fs.readFile('./api/data/messageList.json', 'utf-8', (err, messageList) => {
            if (err) {
                console.log('File read failed:', err);
                return;
            };
            const idToRemove = req.params.id.split(':')[1];
            const newMessageList = JSON.parse(messageList).filter(message => message.id !== idToRemove);
            fs.writeFile('./api/data/messageList.json', JSON.stringify(newMessageList, null, 2), (err) => {
                if (err) console.log('File write failed:', err);
                return;
            });
            res.status(200).end();
        })
    })

export default router;
