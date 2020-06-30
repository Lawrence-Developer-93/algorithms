// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'





//"This is the easiest solution to the problem but it does not really show your skill cause of how easy it is."

// function reverse(str) {
// 	const arr = str.split('');
// 	arr.reverse()
// 	return arr.join('')
// }

// module.exports = reverse;









//"I made a beginners mistake here. I made an infinite loop."

// function reverse(str) {

// 	let x = ""
// 	for (var i = 0; i = str.length - 1; i--) {
// 		x = x + str[i]
// 	}
// 	return x;
// }

// module.exports = reverse;









































//"This code works/ decrementing for loop" 1st try

// function reverse(str) {

// 	var x = '';
// 	for (i = str.length-1; i >=0; i--) {
// 		x = x + str[i];
// 	}
// 	return x;
// }

// module.exports = reverse;









































//"Working decrementing for loop." 2nd try

// function reverse(str) {

// 	var x = '';
// 	for (var i = str.length - 1; i >= 0; i--) {
// 		x = x + str[i];
// 	}
// 	return x;
// }

// module.exports = reverse;















































// "Working decrementing for loop." 3rd try

// function reverse(str) {
// 	var x = '';
// 	for (i = str.length - 1; i >=0; i--) {
// 		x = x + str[i];
// 	}
// 	return x;
// }

// module.exports = reverse;








//"A SMALL VICTORY! I did it! by myself!" 
//"No notes! No Lectures! I analyzed the decrementing code and derived the code for the incrementing for loop! 1st try."

// function reverse(str) {

// 	var last = str.length - 1;
// 	var x = '';

// 	for (i = 0; i < str.length; i++) {

// 		x = x + str[last - i];
// 	}
// 	return x;
// }

// module.exports = reverse;




























//"I did it again! this time it was much easier considering I just did it 3 minutes ago." 2nd try.

// function reverse(str) {

// 	var x = '';
// 	var last = str.length-1;

// 	for (var i = 0; i < str.length; i++) {
// 		x = x + str[last - i];
// 	}
// 	return x;
// }

// module.exports = reverse;




























//"A working increminting for loop. 3rd try"

// function reverse(str) {

// 	var x = '';
// 	var last = str.length - 1;

// 	for (var i = 0; i < str.length; i++) {
// 		x = x + str[last - i];
// 	}
// 	return x;
// }

// module.exports = reverse;


//READ ME => EXPLANATION ON INCREMENTING FOR LOOP.

// FOR THIS EXAMPLE LET US TAKE THE WORD "HELLO". IT HAS 5 CHARACTERS AND AN INDEX LENGTH OF 4.

// 1. YOU NEED TWO VARIABLES. 1 THAT IS NEW AND EMPTY AND 1 THAT = STR.LENGTH -1 (VAR LAST).
// 2. WE NEED VAR LAST IN ORDER TO GET THE MATH RIGHT WHEN WE USE THE FORMULA FOR OUR INCREMENTING FOR LOOP.
// 3. X = X + [LAST - I]     JUST MEANS      X = 0 + [4 - 1] = WHICH GIVES US THE ANSWER 4. NOW WE ITTERATE.
// 4. X = X + [LAST - I]     PLUS 1 TO THE VALUE OF I MEANS      X = 0 + [4 - 1] = GIVES US THE ANSWER 3. 
// 5. AS THE CODE ITTERATES, IT WILL GO FROM INDEX 4 TO INDEX 0 WITH EACH TIME PREPENDING THE NEW VALUE OF X TO ITSELF.
// 6. ONCE VARIABLE I REACHES A VALUE THAT LIMITS IT FROM ITTERATING ANY FURTHER, A REVERSED STRING WILL BE FORMED.
































// "This is the second solution provided by Stephen. It works." 2nd try.

// function reverse(str) {

// 	var x = '';

// 	for (let character of str) {
// 		x = character + x;
// 	}
// 	return x;
// }

// module.exports = reverse;


// READ ME => EXPLANATION FOR THE FOR OF METHOD FOR STRING REVERSAL.
// 1. YOU ONLY NEED 1 VARIABLE.
// 2. INSTEAD OF USING THE TRADITIONAL FOR (I = 0; I < STR.LENGTH; I++), INSTEAD YOU USE FOR (LET CHARACTER OF STR).
// 3. IN THE (LET CHARACTER OF STR), CHARACTER IS THE CURRENT VALUE OF THE VARIABLE TO BE ITTERATED AND STR IS THE OBJECT THAT WE ARE ITTERATING ON.
// 4. A.) X = CHARACTER + X => WORKS     HOWEVER    B.) X = X + CHARACTER DOES NOT WORK. 
// 5. YOU KNOW THAT METHOD A. WORKS BUT YOU DO NOT KNOW WHY METHOD B. DOES NOT WORK.
// 6. IT MUST HAVE SOMETHING TO DO WITH APPENDING AND PREPENDING. YOU NEED TO SEARCH IT UP MORE.
// 7. THE LOGIC FOR THE "FOR OF LOOP" IS THE SAME IN THE "FOR IN LOOP". 
































// "This code works. This is my 3rd try."

// function reverse(str) {

// 	var x = '';

// 	for (let character of str) {
// 		var x = character + x;
// 	}
// 	return x;
// }

// module.exports = reverse;









































// function reverse(str) {
// 	var x = '';

// 	for (let character of str) {
// 		x = character + x;
// 	}
// 	return x;
// }

// module.exports = reverse;







































// "1st try, I did not get it right. It is significanlly harder than the first and second method taught by Stephen."
// "Now you know how to do this though."

// function reverse(str) {

// 	return str.split('').reduce((reversed, character) => {
// 		return character + reversed;
// 	}, '');
// }

// module.exports = reverse;




































	



// "2nd try. I understand things better now. did not get any errors this time."

// function reverse(str) {
// 	return str.split('').reduce((reversed, character) => {
// 			return character + reversed;
// 	}, '') 
// }

// module.exports = reverse;

// READ ME: EXPLANATION FOR THIS METHOD OF STRING REVERSAL.
// 1. THE FIRST STEP IS SPLITTING THE STRING BY USING SPLIT.
// 2. USING SPLIT GIVES US AN ARRAY.
// 3. WITH THIS ARRAY WE CAN USE THE REDUCE HELPER.
// 4. THE REDUCE HELPER IS USED TO TAKE ALL THE VALUES OF AN ARRAY AND REDUCE OR CONDENSE THEM INTO ONE VALUE.
// 5. THE FIRST VARIABLE OR VALUE IN THE REDUCE HELPER IS THE ACCUMULATOR OF YOUR REDUCE METHOD.
// 6. THE SECOND VARIABLE IS THE CURRENT VALUE OF YOUR REDUCE METHOD.
// 7. THE REDUCE METHOD RUNS THE LOGIC OF THE FUNCTION ONE TIME AND THEN ITTERATES TO THE NEXT CURRET VALUE.
// 8. THE RESULTING VALUE OF EACH ITTERATION IS ADDED TO THE VALUE OF THE ACCUMULATOR.
// 9. AFTER THE REDUCE METHOD HAS COMPLETED ITTERATING THOUGH THE ENTIRE ARRAY, A REVERSED STRING WILL BE FORMED.













































// function reverse(str) {
// 	var x = str.split('');
// 	x.reverse();
// 	return x.join('');
// }

// module.exports = reverse;





// function reverse(str) {

// 	var x = str.split('');
// 	x.reverse();
// 	return x.join('');
// }

// module.exports = reverse;






// function reverse(str) {

// 	var x = '';

// 	for (let character of str) {
// 		x = character + x;
// 	}
// 	return x;
// }

// module.exports = reverse;






// "I HAD A LITTLE TROUBLE HERE. IT TOOK A SMALL PEAK AT THE CODE ABOVE FOR ME TO REMEMBER HOW IT WORKS."
// "I GUESS I NEED TO WRITE THE EXPLANATION FOR THE DECREMNTING FOR LOOP IN ORDER FOR THE METHOD TO CONSOLIDATE IN MY MIND."

// // function reverse(str) {

// // 	var x = '';

// // 	for (i = str.length -1; i >= 0; i--) {
// // 		x = x + str[i];
// // 	}
// // 	return x;
// // }

// // module.exports = reverse;

// READ ME => EXPLANATION FOR THE DECREMNTING FOR LOOP
// 1. YOU NEED 1 VARIABLE AND IT IS AN EMPTY SET.
// 2. IN THIS EMPTY VARIABLE, YOU WILL PREPEND EACH CHARACTER TAKEN FROM THE ORIGINAL STRING THAT IS BEING ITTERATED ON.
// 3. THE FIRST ARGUEMENT FOR I MUST BE (I = STR.LENGTH -1) IN ORDER TO CORRECT FOR THE FACT THAT CHARACTERS START COUNTING AT "1" WHILE THE INDEX STARTS COUNTING AT "0".
// 4. I NEEDS TO BE GREATER THAN OR EQUAL TO 0 BECAUSE THE LOWEST VALUE OF I IS ALWAYS 0.
// 5. THE 0 INDEX IN A STRING IS ALSO THE FIRST CHARACTER IN A STRING OR CHARACTER NUMBER 1.









































// function reverse(str) {

// 	var x = '';

// 	for (i = str.length - 1; i >= 0; i--) {
// 		x = x + str[i];
// 	}
// 	return x;
// }

// module.exports = reverse;








































// "I got it right! but before I got it right, I accidentally made an infinite loop again, and it caused the laptop to crash again."

// function reverse(str) {

// 	var x = '';
// 	var last = str.length - 1;

// 	for (i = 0; i < str.length; i++) {
// 		x = x + str[last - i];
// 	}
// 	return x;
// }

// module.exports = reverse;

// READ ME => IMPORTANT DIFFERENTIATION FOR INCREMENTING AND DECREMNTING FOR LOOPS.
// 1. WHEN USING INCREMENTING OR DECREMNTING FOR LOOPS, THE FIRST ARGUEMENT FOR YOUR INDEX IS ALWAYS THE STARTING VALUE FOR YOUR I.
// 2. WHEN USING THE INCREMENTING FOR LOOP, YOU MUST SET YOUR SECOND ARGUEMENT AS THE NUMBER OF OBJECTS IN THE ARRAY, ELSE YOU WILL CREATE AN INFINITE LOOP.
// 3. WHEN USING THE DECREMNTING FOR LOOP, YOU MUST SET YOUR SECOND ARGUEMENT SUCH THAT THE VALUE OF I IS ALWAYS GREATER THAN OR EQUAL TO 0.
// 4. IF YOU DO NOT PROPERLY SET THE LIMITS OF THE FOR LOOPS, THEN YOU WILL CREATE AN INFINITE LOOP.



































// "I TOOK A BREAK FOR ABOUT 3 HOURS AND WHEN I CAME BACK TO CODE, I FOUND THAT I COULD DO THE REDUCE METHOD WITH JUST THE FIRST TRY. THIS TELLS ME THAT IT IS NOW IN MY LONG TERM MEMORY."
// "I ALSO NOW HAVE A BETTER UNDERSTANDING OF WHY "CHARACTER + REVERSED" WORKS BUT "REVERSED + CHARACTER DOES NOT"."
// "IT MUST BE BECAUSE IN "REVERSED + CHARACTER" WE ARE TRYING TO PREPEND "REVERSED" TO "CHARACTER", AND THAT JUST DOES NOT MAKE ANY LOGICAL SENSE."


// function reverse(str) {
// 	return str.split('').reduce((reversed, character) => {
// 		return character + reversed;
// 	}, '');
// }

// module.exports = reverse;