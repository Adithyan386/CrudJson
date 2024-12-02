const jsonserver = require('json-server')

const userserver = jsonserver.create()

const router = jsonserver.router('db.json')

const midlleware = jsonserver.defaults()

const port = 4000 || process.env.port

userserver.use(midlleware)
userserver.use(router)

userserver.listen(port,() =>{
    console.log(`Server Runing on Port ${port}`);
})