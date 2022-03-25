console.log("Hello World!");

let string="JavaScript";
console.log(string)

//1) lunghezza
console.log(string.length);

//2) accesso ad una lettera
let primalettera;
primalettera=string[0];
console.log(primalettera);

//3)Tutto maiuscolo
console.log(string.toUpperCase());

//4) tutto minuscolo
console.log(string.toLowerCase());

//5) sotto stringa
console.log(string.substr(4,6));
console.log(string.substring(4,10));
console.log(string.substring(0,4));

/////////////////////////////////////////////
let string2="PON su JavaScript    j";

//6/7)split & trim

console.log(string2.split());
let s3=string2.trim().split(' ');
console.log(s3);

//8)
console.log(string.includes('Java'))

//trasformare la prima lettera di ogni parola di una stringa in maiuscolo (la stessa stringa)
let string3="stringa da modificare";
let app=string3.split(' ');

for(let i=0;i<app.length;i++){
    //console.log(app[i][0].toUpperCase()+app[i].substring(1));
    app[i]=app[i][0].toUpperCase()+app[i].substring(1);
}
string3=app.join(' ');
console.log(string3);

//9) charAt

console.log(string3.charAt(2));