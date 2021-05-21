const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Hi there tasters!')
rl.question('Do you need help with the rules and how to use? (Y/N) >>> ', YorN => {

if(YorN === "Y") {
    console.log("how to use:\n\nanswer the questions on a scale from 1-5. 1 being the worst, 5 being the best\n\nrules:\nonly use 1-5 nore more no less, and only use a number once (ex: dont use 3, twise in a row)\n\nTOS:\nI need your clothes, your boots, and your motorcycle\nYou cannot self-terminate\nCome with me if you want to live\n\nNow, on to tasting!");
} else if(YorN === "N") {
    console.clear("great!");
}

rl.question("what's your name taster?\n>", tasterName1 => {
    console.log(`hello there ${tasterName1}`);
rl.question("what did you think of the grapefruit flavor?\n>", grapefruit1 => {
rl.question("what did you think of the apricot flavor?\n>", apricot1 => {
rl.question("what did you think of the mango flavor?\n>", mango1 => {
rl.question("what did you think of the orange flavor?\n>", orange1 => {
rl.question("what did you think of the lime flavor?\n>", lime1 => {
    console.clear(`Thanks ${tasterName1}`);

rl.question("what's your name taster?\n>", tasterName2 => {
    console.log(`hello there ${tasterName2}`);
rl.question("what did you think of the grapefruit flavor?\n>", grapefruit2 => {
rl.question("what did you think of the apricot flavor?\n>", apricot2 => {
rl.question("what did you think of the mango flavor?\n>", mango2 => {
rl.question("what did you think of the orange flavor?\n>", orange2 => {
rl.question("what did you think of the lime flavor?\n>", lime2 => {
    console.clear(`Thanks ${tasterName2}`); 

rl.question("what's your name taster?\n>", tasterName3 => {
    console.log(`hello there ${tasterName3}`);
rl.question("what did you think of the grapefruit flavor?\n>", grapefruit3 => {
rl.question("what did you think of the apricot flavor?\n>", apricot3 => {
rl.question("what did you think of the mango flavor?\n>", mango3 => {
rl.question("what did you think of the orange flavor?\n>", orange3 => {
rl.question("what did you think of the lime flavor?\n>", lime3 => {
    console.clear(`Thanks ${tasterName3}`); 

const G = Number(grapefruit1) + Number(grapefruit2) + Number(grapefruit3)
const A = Number(apricot1) + Number(apricot2) + Number(apricot3)
const M = Number(mango1) + Number(mango2) + Number(mango3)
const O = Number(orange1) + Number(orange2) + Number(orange3)
const L = Number(lime1) + Number(lime2) + Number(lime3)



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

})})})})})})
})})})})})})
})})})})})})
})