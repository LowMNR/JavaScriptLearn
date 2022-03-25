// console.log("Hello World!");
// console.log(3>2);
// console.log(3>=2);
// console.log(3<2);
// console.log(2<3);
// console.log(3<=3);
// console.log(3==2);
// console.log(3!=2);
// console.log(3=='3');
// console.log(3==='3');
// console.log(3!=='3');
// console.log(3!=3);
// console.log(0==false);
// console.log(0===false);
// console.log(undefined==null);
// console.log(undefined===null);
// console.log(NaN==NaN);
// console.log(typeof(NaN));

//casting
    //coercizione implicita
    // console.log('3'+10);
    // console.log('ciao'+null);
    // console.log(true+null);

    // //coercizione esplicita
    // let num1='10.52';
    // console.log(typeof(num1));
    // let numInt1=parseFloat(num1);
    // //let numInt1=parseInt(numInt1);
    // console.log(typeof numInt1,numInt1);

    // let num2=5;
    // let numString2= String(num2);
    // console.log(typeof numString2); ` `

    let pr2=prompt("Inserisci una frase");
    let fin_str2="";
    if(pr2.length>16){
        fin_str2+=pr2.substring(0,16);
        fin_str2="....";
        console.log(fin_str2);
    }
    else{
        console.log(pr2);
    }