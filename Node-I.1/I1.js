// on console: npm i readline-sync

//prompt i consollen
const readline = require('readline-sync');
let userID = readline.question("Enter userID: ");
let email = readline.question("Enter your email: ");
console.log(`Hi ${userID}, your email is: ${email}`);

//skriver det i en ny fil
let fs = require('fs');
let filename = process.argv[2];

let content = `UserID: ${userID} e-mail: ${email}`

fs.writeFile('userinfo.txt', content , (err) => {
    if (err) {
        throw err;
    }
    console.log("Your userID and e-mail is now saved");
});