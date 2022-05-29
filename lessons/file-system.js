const {
    rejects
} = require('assert')
const {
    count
} = require('console')
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

// через переменную окружения передать строку, записать ее в файл
// прочитать файл, посчитать кол-во слов в файле и записать
// их в новый файл count.txt,затем удалить первый файл


// let text = process.env.TEXT || ''

// const writeFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
//         if (err) {
//             return reject(err)
//         }
//         resolve()
//     }))
// }
// const readFileAsync = async path => {
//     return new Promise((resolve, reject) => fs.readFile(path, {
//         encoding: 'utf-8'
//     }, (err, data) => {
//         if (err) {
//             return reject(err)
//         }
//         console.log(typeof data)
//         resolve(data)
//     }))
// }
// const removeFileAsync = async path => {
//     return new Promise((resolve, reject) => fs.rm(path, (err) => {
//         if (err) {
//             return reject(err)
//         }
//         resolve()
//     }))
// }
// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//     .then(() => readFileAsync(path.resolve(__dirname,'text.txt')))
//     .then((data) => writeFileAsync(path.resolve(__dirname, 'count.txt'), `${data.length}`))
//     .then(() => removeFileAsync(path.resolve(__dirname,'text.txt')))
//     .catch(err => console.log(err))