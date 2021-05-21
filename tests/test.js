const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log('start log');
rl.question('Y/N question >>> ', YorN => {
    if(YorN === "Y") {
        console.log("you already know what to do");
    } else if(YorN === "N") {
        console.log("proceeding");
    }

rl.question("taster1? >>> ", tasterName1 => {
    console.log(`tasterName1: ${tasterName1}`);
rl.question("grapefruit1? >>> ", grapefruit1 => {
rl.question("apricot1? >>> ", apricot1 => {
rl.question("mango1? >>> ", mango1 => {
rl.question("orange1? >>> ", orange1 => {
rl.question("lime1? >>> ", lime1 => {

const G = Number(grapefruit1)
const A = Number(apricot1)
const M = Number(mango1)
const O = Number(orange1)
const L = Number(lime1)



const flavors = [
    [G, 'grapefruit'],
    [A, 'apricot'],
    [M, 'mango'],
    [O, 'orange'],
    [L, 'lime'],
];

flavors.sort(function(a, b) {
    if(b[0] === a[0]) {
        return 0;
    } else {
        return (b[0] < a[0]) ? -1 : 1;
    }
});

console.table(flavors);
rl.close(0)

                        })
                    })
                })
            })
        })
    })
})