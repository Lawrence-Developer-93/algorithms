// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// function reverse(str) {
// 	const arr = str.split('');
// 	arr.reverse()
// 	return arr.join('')
// }

// module.exports = reverse;



function reverse(str) {

	let x = ""
	for (i = 0; i = str.length - 1; i--) {
		x = x + str[i]
	}
	return x;
}

module.exports = reverse;