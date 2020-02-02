'use strict';

//prompt i consollen
const readline = require('readline-sync');
let userID = readline.question("Enter userID: ");
let email = readline.question("Enter your email: ");
//console.log(`Hi ${userID}, your email is: ${email}`);

let fs = require('fs');
let filename = 'userinfo.json';
var members = [];

let new_lines = {
    UserID: `${userID}`, 
    email: `${email}`
};
var jsonText = JSON.stringify(new_lines);
members.push(jsonText + ",");


/* 
* Opgaven blev først lavet en tekst fil, men for at gøre det nemmere blev det lavet om til en JSON. 
* Her er muligheden for at tilgå informationen nemmere
*/


fs.readFile(filename, (err, data) => { //læser data og printer det ud
    if (err) {
        fs.writeFile(filename, members, (err) => { //laver en ny fil
            if (err) {
                throw err;
            }
            console.log("a new file is made");        
        });   

    } else {
        if(members.includes(`${userID}`) == true){ //undersøger om værdien er i arrayet
            console.log(`${email}`);
            console.log("You have a user here. The email is: " + `${email}`);
        } else{
            fs.appendFile(filename, members, (err) => {  //tilføjer information i filen
                if(err) {
                    throw err;
                }
                console.log('You now have a user');
            });
        }
    }
    console.log("Content:\n--------\n" + data);
});

console.log('This is after the write call');

