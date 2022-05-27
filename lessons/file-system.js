const fs = require('fs')
const path = require('path')

// fs.mkdirSync(path.resolve(__dirname,'dir','dir2','dir3'),{recursive: true})
// fs.mkdir(path.resolve(__dirname,'dir'), (err) => {
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log('папка создана')
// })
// console.log('END')

// fs.rmdir(path.resolve(__dirname,'dir'),(err) => {
//     if(err){
//         throw err;
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'text.txt'), '5 qwertygthyujk 7 8 9 10', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('файл записан')
//     fs.appendFile(path.resolve(__dirname, 'text.txt'), 'добавили в конец', (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log('файл записан')
//         fs.appendFile(path.resolve(__dirname, 'text.txt'), 'добавили в конец2', (err) => {
//             if (err) {
//                 throw err;
//             }
//             console.log('файл записан')
//         })
//     })
// })


// const writeFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
//         if (err) {
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }

// const appendFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
//         if (err) {
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }

// const readFileAsync = async (path) => {
//     return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err,data) => {
//         if (err) {
//             return reject(err.message)
//         }
//         resolve(data)
//     }))
// }

// const removeFileAsync = async (path) => {
//     return new Promise((resolve, reject) => fs.rm(path, (err) => {
//         if (err) {
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }

// writeFileAsync(path.resolve(__dirname, 'text.txt'), 'hello world')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' 123 '))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' 456 '))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), ' 789 '))
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then(data => console.log(data))
//     .catch(err => console.log('err'))

// removeFileAsync(path.resolve(__dirname,'text.txt'))
// .then(()=> console.log('succses removed'))