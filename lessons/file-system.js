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

fs.writeFile(path.resolve(__dirname,'text.txt'), '5 qwertygthyujk 7 8 9 10', (err) =>{
    if(err){
        throw err
    }
    console.log('файл записан')
})

fs.appendFile(path.resolve(__dirname,'text.txt'), 'добавили в конец', (err) =>{
    if(err){
        throw err;
    }
    console.log('файд записан')
})
