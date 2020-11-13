// server.js
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);



server.post('auth/login', (req, res) => {
    const { email, password } = req.body;

    if(isAuthenticated(email, password)) {
        //jwt
        const jwToken = "ljljsf.";
        return res.status(200).json(jwtToken)
    } else {
        const status = 401;
        const message = 'Incorrect email or password';
        return res.status(status).json({status, message})
    }
});

server.use(router);
server.listen(3003, () => {
  console.log('JSON Server is running');
});