const palindrome = (str) => {
    let count = 0;
    let palindromeWords = [];
    let palindromeIndex = [];
    let invalidPalindromeIndex = [];
    str = str.toLowerCase();
    let arrWords = str.split(" ");
    let reverseWord = "";
    let ans = [];

    for(let i = 0; i< arrWords.length; i++){
        let newWord = arrWords[i];

        for(let j = 0; j < newWord.length; j++){
            reverseWord = newWord.split("").reverse().join("");
            
        }
        if(newWord == reverseWord){
            count++
            palindromeWords.push(newWord);
            palindromeIndex.push(i);
            
        } else{
            invalidPalindromeIndex.push(i);
        }
    }
    console.log(`Total detected palindrome : ${count}`); 
    console.log(`Palindrome words: ${palindromeWords}`);
    console.log(`Palindrome index: ${palindromeIndex}`);
    console.log(`Invalid palindrome index: ${invalidPalindromeIndex}`);

}


palindrome("kakak menjual katak dengan harga 12021");