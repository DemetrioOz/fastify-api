export default {
    body: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                minLength: 3,
                maxLength: 35
            },
            email: {
                type: 'string',
                maxLength: 40
            },
            password: {
                type: 'string',
                minLength: 3,
                maxLength: 10
            }
        },
        required: [
            'name',
            'email',
            'password'
        ]
    }
}