// // // function reverse(str) {
// // // 	const array = str.split('');
// // // 	array.reverse();
// // // 	return array.join('');
// // // }

// // // module.exports = reverse;


// // function reverse(str) {

// // 	let reverse = '';

// // 	for (let character of str) {
// // 		reverse = character + reverse;
// // 	}

// // 	return reverse;
// // }

// // module.exports = reverse;







//The code bellow does not work.

// function reverse(str) {

// 	var x = '';

// 	for (i = str.length-1; i >= 0; i--) {
// 		x = x + str[i]; 
// 	}

// 	return x;
// }

// reverse("Hello!");

// module.exports = reverse;










// function reverse(str) {

// 	var x = '';
// 	var last = str.length-1;

// 	for (i = 0;  i < str.length; i++) {
// 		x = x + str[last - i];
// 	}

// 	return x;
// }

// reverse("HELLO!");

// module.exports = reverse;




// function reverse(str) {

// 	var x = '';
// 	var last = str.length-1;

// 	for (i = 0; i < str.length; i++) {
// 		x = x + str[last - i];
// 	}

// 	return x;
// }

// module.exports = reverse;




// function reverse(str) {

// 	var x = '';

// 	for (i = str.length - 1; i >= 0; i--) {
// 		var x = x + str[i];
// 	}
// 	return x;
// }

// module.exports = reverse;





// function reverse(str) {
// 	const arr = str.split('');
// 	arr.reverse();
// 	return arr.join('');
// }

// module.exports = reverse;


// 1	0
// 2	1
// 3	2
// 4	3
// 5	4

//H E L L O  => O L L E H



// function reverse(str) {
	
// 	var x = '';
	
// 	for (i = str.length - 1; i >= 0; i--)
// 		x = x + str[i];

// 	return x;
// }

// module.exports = reverse;



// function reverse(str) {

// 	return str.split('').reduce((reverse, character) => {
// 		return character + reverse;
// 	},''); 

// }

// module.exports = reverse;






// function reverse(str) {
// 	return str.split('').reduce((reversed, character) => {
// 		return character + reversed;
// 	}, '');
// }

// module.exports = reverse;




// function reverse(str) {
// 	 str.split('').reduce((rev, char) => rev += char, '';	
// }

// reverse('HELLO!');

// module.exports = reverse;


























































