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
    paths: {
        "/api/items": {
            get: {
                tags: ["Items"],
                description: "Fetch all items from the data.json file and return them as a response.",
                responses: {
                    200: {
                        description: "Ok",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    example: {
                                        "item": "Laptop",
                                        "description": "HP Lpt",
                                        "price": "500"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Items"],
                description: "Create a new item by sending data in the request body and appending it to the list of items in data.json. Each item should have an id field, which should be unique.",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    item: { type: "string" },
                                    description: { type: "string" },
                                    price: { type: "string" }
                                },
                                example: {
                                    "item": "Tv",
                                    "description": "TVs are good",
                                    "price": "500"
                                }
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Created",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    example: {
                                        "id": "unique-id",
                                        "item": "Tv",
                                        "description": "TVs are good",
                                        "price": "500"
                                    }
                                }
                            }
                        }
                    }
                }
            },
        }
    }
};

module.exports = swaggerUiDocs;
