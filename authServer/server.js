const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const randomString = require('randomstring')
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')
const fs = require('fs');
const morgan = require('morgan')
const path = require('path')
const bcrypt = require('bcrypt-nodejs')
const port = 3004;

const app = express();
app.use(bodyParser.json());

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

app.use(morgan('combined', {stream: accessLogStream}))

const adapter = new FileAsync('./db.json');

low(adapter).then(db => {
     /**
     * User Login
     * 
     * API: /regist
     * 
     * email, password
     * email is the identifier
     * id is random generated as 20 chars
     * after regist, would gen the token
     * 
     */

    app.post('/signUp',  (req, res) => {
        /**
     * User Login
     * 
     * API: /regist
     * 
     * username, password
     * username is the identifier
     * id is random generated as 20 chars
     * after regist, would gen the token
     * 
     */

     app.post('/user',  (req, res) => {
        res.jsonp({
            success: 'Regist successed'
        })
        // const passedEmail = db.get('accounts').find({ email: req.body.email }).value();

        // try {
        //     if (passedUserName.id) {
        //         res.status(409).jsonp({
        //             error: 'user already exist !'
        //         })
        //     }
        // } catch (error) {
        //     const encodePwd = bcrypt.hashSync(req.body.pwd);
        //     if (typeof req.body.username === 'undefined') {
        //         res.status(404).jsonp({
        //             err: 'You should enter the username'
        //         })
        //     } else {
        //         const user = {
        //             id: randomString.generate(20),
        //             username: req.body.username,
        //             pwd: encodePwd,
        //             rightLevel: req.body.rightLevel ? req.body.rightLevel : 1
        //         }
        //         db.get('accounts').push(user).write();
        //         const token = jwt.sign({ user }, "my_secret_key", { expiresIn: 60 });
        //         res.jsonp({
        //             success: 'Regist successed',
        //             token: token
        //         })
        //     }
        // }
        })
    })
})
    .then(() => {
        app.listen(port, () => console.log('LowDB API server is listening on port ' + port));
    });