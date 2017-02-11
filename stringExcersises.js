function calculateStringLenght(){

    stringLenght = ((document.getElementsByTagName("p").item(0)).innerText.length);
    stringText = ((document.getElementsByTagName("p").item(0)).innerText);
    alert( " The String lenght  for  "+ stringText + " is " + stringLenght);



}

function codifyString(){

    stringLenght = ((document.getElementsByTagName("p").item(0)).innerText);
    stringText = stringLenght ;

    stringLenght = stringLenght.replace(/a/gi || /A/gi, "1");
    stringLenght = stringLenght.replace(/e/gi || /E/gi, "2");
    stringLenght = stringLenght.replace(/i/gi || /I/gi, "3");
    stringLenght = stringLenght.replace(/o/gi || /O/gi, "4");
    stringLenght = stringLenght.replace(/u/gi || /U/gi, "5");

    alert ("Codification for the word "+stringText+" is "+stringLenght);
}

function reverseString(){

        var   stringText = ((document.getElementsByTagName("p").item(0)).innerText);
        var   stringCopy = " ";

        for ( var i =stringText.length -1 ; i >= 0; i--){
            stringCopy += stringText[i];
        }


        alert("The reverse string for "+stringText+" is "+ stringCopy);

    }
