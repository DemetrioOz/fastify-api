import app from './app'

const start = async () => {
    try {
        await app.listen(3000)
    } catch (err) {
        console.log(err)
        process.exit(0)
    }
}

start()