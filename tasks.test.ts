import {
	sortArray,
	capitalized,
	summation,
	multiplyByIndex,
	isPalindrome,
} from "./tasks";

/* Sorting tests */

describe("sorting an array", () => {
	it("sorts an array in ascending order", () => {
		const array = [5, 3, 8, 2, 1, 4];
		expect(sortArray(array)).toEqual([1, 2, 3, 4, 5, 8]);
		const array2 = [25, 2, -5, 13, 2, 0];
		expect(sortArray(array2)).toEqual([-5, 0, 2, 2, 13, 25]);
		const array3 = [4, 4, 13, 24, 34, 1, 0, 434, -12, 0];
		expect(sortArray(array3)).toEqual([-12, 0, 0, 1, 4, 4, 13, 24, 34, 434]);
		const array4 = [4532, 35, 2, 0, 0, 1, -244, -123, 12, 11];
		expect(sortArray(array4)).toEqual([
			-244, -123, 0, 0, 1, 2, 11, 12, 35, 4532,
		]);
	});
});

/* Capitalization tests */

describe("capitalizing words in a string", () => {
	it("capitalizes the first character of each word in a string", () => {
		const sentence = "school of code test sentence for ticket 2";
		expect(capitalized(sentence)).toEqual(
			"School Of Code Test Sentence For Ticket 2",
		);
		const sentence2 = "hello, school of code";
		expect(capitalized(sentence2)).toEqual("Hello, School Of Code");
		const sentence3 = "workshop time, and then lunch.";
		expect(capitalized(sentence3)).toEqual("Workshop Time, And Then Lunch.");
		const sentence4 = "bootcampers are cooldudes and dudettes";
		expect(capitalized(sentence4)).toEqual(
			"Bootcampers Are Cooldudes And Dudettes",
		);
	});
});

/* Summation tests */

describe("Summation of a number", () => {
	it("returns the summation of a given number", () => {
		const integer = 10;
		expect(summation(integer)).toEqual(55);
		const integer2 = 3;
		expect(summation(integer2)).toEqual(6);
		const integer3 = 5;
		expect(summation(integer3)).toEqual(15);
		const integer4 = 100;
		expect(summation(integer4)).toEqual(5050);
	});
});

/* Multiply by Index tests */

describe("Multiplying numbers in an array by the square of the index", () => {
	it("multiplies the numbers in an array by the square of the index", () => {
		const array = [2, 3, 4];
		expect(multiplyByIndex(array)).toEqual(19);
		const array2 = [1, 2, 3, 4, 5];
		expect(multiplyByIndex(array2)).toEqual(40);
		const array3 = [5, 4, 3, 2, 1];
		expect(multiplyByIndex(array3)).toEqual(10);
		const array4 = [1, 1, 1, 1, 1];
		expect(multiplyByIndex(array4)).toEqual(10);
	});
});

/* Palindrome tests */

describe("Checking if a string is a palindrome", () => {
	it("checks if a string is a palindrome", () => {
		const word = "racecar";
		expect(isPalindrome(word)).toEqual(true);
		const word2 = "hello";
		expect(isPalindrome(word2)).toEqual(false);
		const word3 = "goodbye";
		expect(isPalindrome(word3)).toEqual(false);
		const word4 = "saippuakivikauppias";
		expect(isPalindrome(word4)).toEqual(true);
	});
});
