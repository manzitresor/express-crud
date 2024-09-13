

const swaggerUiDocs = {
    openapi: '3.0.0',
    info: {
     title: "Crud API",
     version: "1.0.0",
     description: "Simple API that handles basic Node.js server using Express"
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Local server"
        }
    ],
    tags: [
        {
            name: "Items"
        }
    ],
    
}

module.exports = swaggerUiDocs