const server = require('express')();

if (process.env.NODE_ENV === 'production') {
    server.listen(process.env.PORT);
}
