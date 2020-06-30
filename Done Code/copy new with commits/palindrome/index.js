// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// "You got it. the idea was the same but for some reason the following line of code does not work."
// "const reversed = str.split('')"
// "reversed.reverse()"
// "reversed.join('')"
// "return reversed === str"

// "You don't know yet why making the code that way wont work when you have already set const or var to reversed."

// function palindrome(str) {
// 	const reversed = str.split('').reverse().join('');

// 	if ( reversed === str ) {
// 		return true;
// 	} else return false;

// }

// module.exports = palindrome;








































// "For some reason you still do not know this does not work. better to ask demby why this does not work."

// function palindrome(str) {

// 	const x = str.split('');
// 	x.reverse();
// 	x.join('');

// 	return x === str;
// }

// module.exports = palindrome;



 

































// function palindrome(str) {
// 	return str.split('').every((character, i) => {
// 		return character === str[str.length - i - 1];	
// 	})
// }

// module.exports = palindrome;






































// "WOW! YOU DID IT! YOU GOT IT WITHOUT LOOKING UP ANYTHING!"


// function palindrome(str) {

// 	var x = str.split('').reverse().join('');

// 	if (x === str){
// 		return true;
// 	} else return false;
// }

// module.exports = palindrome;