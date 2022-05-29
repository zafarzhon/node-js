const os = require('os')

const cluster = require('cluster')


// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);


// const cpus = os.cpus()



// // console.log(process.pid)
// // while(true){

// // }
// console.log(os.cpus()[1])


// if(cluster.isMaster){
//     for(let i = 0; i<os.cpus().length -2; i++){
//         console.log("working")
//         cluster.fork()
//     }
//     cluster.on('exit', (worker)=>{
//         console.log(`worker with pid=${worker.process.pid} dead`)
//         if(code === 'сигнал'){     // получаем сигнал
//             cluster.fork()
//         }
//         else {
//             console.log('worker dead')
//         }
//     })
// }
// else{
//     console.log(`worker with pid=${process.pid} runed`)
//     setInterval(() => {
//         console.log(`process with pid=${process.pid} eshe rabotaet`);
//     },5000)
// }