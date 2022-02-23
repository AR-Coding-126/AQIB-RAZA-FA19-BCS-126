const vowels = ["a", "e", "i", "o", "u"];

function countVowelsIterative(text,numbers) {
 
    for (let alphabet of text.toLowerCase()) {
        if (vowels.includes(alphabet)) {
            console.log('left vowel is: '+alphabet);
            break;
        }
    }
    
    
    var str = numbers.toString();
    
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    console.log('Reversed string is: '+rev);    
}

var n = 23617;
countVowelsIterative('tyugfdsjba',n);