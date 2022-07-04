///////////////////////////////////////// HOW TO USE THE NATIVE NODE MODULES

// GO TO nodejs.org to view the native modules

/* 1
to use the built-in node module, we first have to call it, in node, we  REQUIRE it.
*/
const fs = require('fs');

/* 2
create a file named file1.txt in the same folder and type any random text in it.
*/

// 3
fs.copyFileSync('file1.txt', 'file2.txt');
/*
what this above code will do is it will look in the current directory (the intro-to-node folder), look for the file called 'file1.txt' and copy it to another file called 'file2.txt'
*/ 

/* 4
-- so far, file2.txt doesn't exist so we go to our hyper (make use that in hyper, you are still within the directory that our javascript file is contained) and run the code 'node index.js' (node the name of the js file).
-- once we see our default command prompt again, it means the running was successful.
*/

/* 5
if we head back to our vscode, we now see we've created the file2 and with the text in file1, now copied in file2.
-- note that if there was any content in file 2 earlier, the copyFileSync module will simply replace the content with that of file 1.
*/ 

/////////////////////////////////////////////////////////////////////////////



////////////////// NPM (NODE PACKAGE MANAGER) and INSTALLING EXTERNAL NODE MODULES

//by installing node, we already installed npm.
//npm allows us to make use of external already made modules that has been made by other developers.

/* 1
-- make sure you are still in that specific directory.

-- we initialize npm by running 'npm init' and hit ENTER key.
-- next, it asks wether to change our directory(i.e intro-to-node).we leave that too and hit ENTER.
-- next, it asks what is the version of your project, we skip this too and hit ENTER.
-- next it asks for the description of the project, we type it and hit ENTER.
-- next is the entry point(this is your js file). hit ENTER.
-- text command should be ignored, so hit ENTER.
-- git repository, if any, type or ignore and hit ENTER.
-- skip 'keywords' and just hit ENTER.
-- 'author' should be your name.
-- skip 'licence' and hit ENTER
-- asks you if its ok, if you hit ENTER, it means its a yes.
*/ 

/* 2
the process above creates the file called package.json and this is a description of all your npm packages so far. once we start installing our external node modules, they will also appear there.
*/ 

/* 3
-- head to npmjs.com, search and get what you want.
-- go to hyper, still in that same directory, (but make sure you have deactivated node from running) and run ;
'npm install (name of the npm)'
-- once it is confirmed without errors, go back to your 'package.json' in your vscode and you will observe in the 'dependencies' that the name of your installed npm has been added there. ie;

"dependencies": {
    "superheroes": "^3.0.0"
  }
  what the above code simply means is that this module depends on the npm superheroes.
*/

// 4 
const superheroes = require('superheroes');
const superVillains = require('superVillains');
//then we require the npm

//5
//we store one of its function in a variable
let mySuperHeroes = superheroes.random()

let allSuperheroes = superheroes.all;

//6
console.log(allSuperheroes);
//console.log it and go to hyper, then still in the same directory, run 'node index.js' and there we get our result.



let mySuperVillain = superVillains.random();

let allMySuperVillains = superVillains.all;

console.log(mySuperVillain);
console.log(allMySuperVillains);