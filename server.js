const app = require('express')();
const apiRouter = require('./routes/api');

// app.use('/api', apiRouter);

app.get('/tasks', (req, res) => {
    res.status(200).send({
        mus: 'da',
        mustik: 'da da da'
    })
});

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});