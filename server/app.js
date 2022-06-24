const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const pool = mysql.createPool({
    multipleStatements: true,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_cicip',
});

const app = express();

app.use(bodyParser.json());

pool.on('error', err => {
    console.error(err);
});

const SECRET_TOKEN = 'TaiKocheng@21!@#';
const EXPIRE_TOKEN = '1d';

app.post('/login', (req, res) => {
    let id = req.body.id;
    let dataSave = {
        user_id : req.body.id,
        user_name: req.body.name,
        user_email: req.body.email,
        user_photo: req.body.photo,
        user_provider: req.body.provider,
    }
    try {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM users WHERE user_id = '${id}' AND user_provider = '${req.body.provider}' LIMIT 1;
                `,
                function (error, resultCariUser) {
                    if (error) throw error;
                    if (resultCariUser[0]) {
                        console.log('user ada');
                        let token = jwt.sign({
                            user: resultCariUser[0]['user_id'],
                            email: resultCariUser[0]['user_email'],
                            name: resultCariUser[0]['user_name']
                        }, SECRET_TOKEN, { expiresIn: EXPIRE_TOKEN });
                        return res.status(200).send({
                            success: true,
                            token: "Bearer" + " " + token
                        });
                    } else {
                        console.log('user tidak ada');
                        connection.query(
                            `
                            INSERT INTO users SET ?;
                            `,
                            [dataSave],
                            function (error, results) {
                                if (error) throw error;
                                let token = jwt.sign({
                                    user: dataSave['user_id'],
                                    email: dataSave['user_email'],
                                    name: dataSave['user_name']
                                }, SECRET_TOKEN, { expiresIn: EXPIRE_TOKEN });
                                return res.status(200).send({
                                    success: true,
                                    token: "Bearer" + " " + token
                                });
                            },
                        );
                    }
                },
            );
            connection.release();
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error,
        });
    }
});

// Get all user
app.get('/users', authenticateToken, (req, res) => {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(
            `
            SELECT * FROM users;
            `,
            function (error, results) {
                if (error) throw error;
                return res.status(200).send({
                    success: true,
                    data: results
                });
            },
        );
        connection.release();
    });
});

// Insert user
app.post('/users', (req, res) => {
    let data = {
        user_email: req.body.email,
        user_name: req.body.name,
        user_password: bcrypt.hashSync(req.body.password, 10),
    };
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(
            `
            INSERT INTO users SET ?;
            `,
            [data],
            function (error, results) {
                if (error) throw error;
                res.send({
                    success: true,
                    message: 'Success',
                });
            },
        );
        connection.release();
    });
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, 'TaiKocheng@21!@#', (err, user) => {
        console.log(err);
        if (err) return res.sendStatus(403);
        req.user = user;
        console.log(req.user);
        next();
    });
}

app.listen(8080, () => {
    console.log('listening on : 8080');
});
