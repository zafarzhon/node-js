//  Readable - чтение
//  Writable - запись
//  Duplex - чтение и запись
//  Transform - как Duplex, но можеть изменить данные по мере чтения

const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname,'test.txt'), (err,data) => {
//     if(err){
//         throw err
//     }
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname,'test.txt'))
// // const stream = fs.createReadStream(path.resolve(__dirname,'test.txt'), {encoding: 'utf-8'})
//
// // // один чанк по дефолту 64кб
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
// stream.on('end', () => console.log('end read'))
// stream.on('open', ()=> console.log('start read'))
// stream.on('error', (e) => console.log(e))

// const writableStream = fs.createWriteStream(path.resolve(__dirname,'test2.txt'))
// for(let i = 0; i< 20; i++){
//     writableStream.write(i + '\n')
// }
// writableStream.end()

// const http = require('http')
// http.createServer((req,res)=>{
//     //req = readable stream
//     //res = writable stream
//     const stream = fs.createReadStream(path.resolve(__dirname,'test.txt'))
//
//     //Стрим законить читать раньше чем пользователь скачает
//     // stream.on('data', chunk => res.write(chunk))
//     // stream.on('end', chunk=> res.end())
//     stream.pipe(res)
// })