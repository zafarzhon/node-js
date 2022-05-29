const Emitter = require('events')
const dotenv = require('dotenv')
dotenv.config()
const emitter = new Emitter()

emitter.on('message', (data, second, third) => {
    console.log(`you send me sms ${data}`)
    console.log(`second arg ${second}`)
})


//-------

// const callback =  (data, second, third) => {
//     console.log(`you send me sms ${data}`)
//     console.log(`second arg ${second}`)
// }
// emitter.on('message', callback)
// emitter.once()
// emitter.removeAllListeners()
// emitter.removeListener('message',callback)

//-------

const MESSAGE = process.env.message || ''

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123)
} else {
    emitter.emit('message', 'you do not send msg')
}



// Когда удобно использовать? 
// http
// websockets
// long pulling
// cluster