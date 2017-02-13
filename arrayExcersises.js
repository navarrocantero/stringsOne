function vowelCount(){

   var stringOne = ((document.getElementsByTagName("p").item(1).innerText));
   var stringSplit = stringOne.split(" ");
   var  count = [0,0,0,0,0,0,0];
   var totalCount = 0;
   var vowel =["a","A","e","E","i","I","o","O","u","U"];


    for ( var i = 0; i < stringSplit.length; i++) {
        for ( var j = 0; j < stringSplit[i].length; j++) {
            for ( var v = 0; v < vowel.length; v++) {
               if (stringSplit[i][j] == vowel[v] ){
                 count[i]++;
                 totalCount++;
               }
            }
        }

    }

    for ( var k = 0; k < stringSplit.length; k++) {
        alert(" The word "+ stringSplit[k] + " have " + count[k] + " vowels")
    }
    alert( " The total vowels are " + totalCount);
}

function vowelReplacement(){

    var stringOne = ((document.getElementsByTagName("p").item(1).innerText));
    var stringSplit = stringOne.split(" ");
    var valor='';

    for ( var i = 0; i < stringSplit.length; i++) {
        valor =stringSplit[i];
        stringSplit[i] = stringSplit[i].replace(/a/ || /A/gi, "1");
        stringSplit[i] = stringSplit[i].replace(/e/ || /E/gi, "2");
        stringSplit[i] = stringSplit[i].replace(/i/ || /I/gi, "3");
        stringSplit[i] = stringSplit[i].replace(/o/ || /O/gi, "4");
        stringSplit[i] = stringSplit[i].replace(/u/ || /U/gi, "5");

        alert ("Codification for the word "+ valor +
            " is "+stringSplit[i]);

    }
}

function reverseArrayString(){

    var stringOne = ((document.getElementsByTagName("p").item(1).innerText));
    var stringSplit = stringOne.split(" ");
    //var reverseString = stringSplit.reverse();

    alert(" The reverse order for :\n" + stringSplit
    + " is :\n" + stringSplit.reverse());

}

function reverseArrayChar() {

    var stringOne = ((document.getElementsByTagName("p").item(1).innerText));
    var stringSplit = stringOne.split(" ");
    var stringCopy = [" "];



 for(var i = 0; i < stringSplit.length ;i++){
     stringCopy  [i] = " ";
    for( var j = stringSplit[i].length-1 ; j >= 0; j--){
        stringCopy[i] += stringSplit[i][j];
        }
         alert("The reverse string for " + stringSplit[i] + " is " + stringCopy[i]);

    }
 }


