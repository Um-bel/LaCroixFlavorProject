const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question("what's your name taster? >>> ", tasterName => {
    console.log(`hello there ${tasterName}`);
    console.log(`make sure to write 1-5, 1 being the best flavor and 5 being the worst`); 

    rl.question("what did you think of the grapefruit flavor? >>> ", grapefruit => {
        const G = (`${Number(grapefruit)} grapefruit`);

        rl.question("what did you think of the apricot flavor? >>> ", apricot => {
            const A = (`${Number(apricot)} apricot`); 

            rl.question("what did you think of the mango flavor? >>> ", mango => {
                const M = (`${Number(mango)} mango`); 

                rl.question("what did you think of the orange flavor? >>> ", orange => {
                    const O = (`${Number(orange)} orange`);

                    rl.question("what did you think of the lime flavor? >>> ", lime => {
                        const L = (`${Number(lime)} lime`); 

// const errorRes1 = 'you already used that for a previous flavor!'; 
// if(A === G) return console.log(errorRes1); 
// if(M === G || A) return console.log(errorRes1); 
// if(O === G || A || M) return console.log(errorRes1); 
// if(L === G || A || M || O) return console.log(errorRes1); 

const flavors = [
    G, A, M, O, L
]; 
flavors.sort(); 
console.log(flavors); 
                    })
                })
            })
        })
    })
})