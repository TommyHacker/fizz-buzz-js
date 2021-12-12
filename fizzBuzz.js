// iterate from 0 to any given number
// return FizzBuzz for num % 15 == 0
// return Fizz for num % 5 == 0
// return Buzz for num % 3 == 0

const fizzBuzz = (num) => {
	let result = '';
	for (let i = 1; i <= num; i++) {
		if (i % 3 === 0 && i % 5 == 0) {
			console.log(`${i}, FizzBuzz`);
		} else if (i % 5 == 0) {
			console.log(`${i}, Fizz`);
		} else if (i % 3 == 0) {
			console.log(`${i}, Buzz`);
		} else {
			console.log(`${i}`);
		}
	}
};

fizzBuzz(15);
