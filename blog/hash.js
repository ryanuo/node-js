const bcrypt = require('bcrypt')


// 哈希算法

async function run(){
    const salt  = await bcrypt.genSalt(10)
    const result = bcrypt.hash('123123',salt);
    console.log(result);
    console.log(salt);
}
run()