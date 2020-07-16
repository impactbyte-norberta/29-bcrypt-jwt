const express = require('express');

const { PORT, db } = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(`Welcome to bcryptjs and jsonwebtoken demo`);
});
app.use('/api/users', require('./routes/users'));

const localPort = PORT || 5000;
if (db) {
    console.log(`Connected to database`);
    app.listen(localPort, () => {
        console.log(`Server runs on port ${localPort}`);
    });
}
