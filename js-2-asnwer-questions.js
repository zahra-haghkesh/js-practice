// 🌟 Open your vscode, then try to solve the following questions there. Finally, send your javascript file considering your answers.
// 1️⃣. Write a code that capitalizes all letters of your name.
let name = "ana"
console.log(name.toUpperCase());


// 2️⃣. Write a code that writes all the letters of your name in lowercase. 
let surname = "AMIRI"
console.log(surname.toLowerCase());

// 3️⃣. Write code that shows the length of your name in the output.
let familyName = "roya"
console.log(familyName.length);

// 4️⃣. Write a code that removes the empty space of a string. For example, "   hello    " should be transformed into "hello".
let masseg = "  hello   "
console.log(masseg.trim());

// 5️⃣. Write code that stores your first name in one variable and your last name in another, then show them side by side in the console.
let firstName = "mina"
let lastName = "nikomanesh"
console.log("mina" + " " + "nikomanesh");

// 6️⃣. Write a code that stores your first and last name in a variable, but only shows the last name in the console. (use string indexing with [])
let text = "welcom to our class"
console.log(text.slice(0,6));


// 7️⃣. Write a code that shows the following text as string in the console:
// "Lorem ipsum", or "lipsum" as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of "Cicero's De Finibus Bonorum et Malorum" for use in a type specimen book.
console.log('"Lorem ipsum", or "lipsum" as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of "Cicero\'s De Finibus Bonorum et Malorum" for use in a type specimen book.');
// 8️⃣. There is a const variable named "abc" given to you to use for the following questions:
const abc = 'abcdefghijklmnopqrstuvwxyz'
// ● Return your name using the abc variable and string indexing with [].

const myName = abc[25] + abc[0] + abc[7] + abc[17] + abc[0];
console.log(myName);
// ● Return "APSignals" using the abc variable and string indexing with [].
const com = abc[0] + abc[15] + abc[18];
const company =  abc[8] + abc[6] + abc[13] + abc[0] + abc[11];
console.log(com.toUpperCase()+company);


// -------------------------------------------------------------------------------------------------------
 
