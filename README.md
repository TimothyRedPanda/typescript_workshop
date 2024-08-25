## TypeScript Workshop

I have created a workshop to allow you to practice TypeScript programming. Each ticket is a specific CodeWars style question and requires you to complete a function to have the tests pass. Each ticket
has four tests and all tests must pass to complete the workshop.

### You will only need to edit `tasks.ts`

## Getting going

1. Clone the respository:
```sh
git clone <repository-url>
```
2. Navigate into `typescript-workshop`
```sh
cd typescript-workshop
```
3. Install our friendly neighbourhood dependencies.
```sh
npm install
```
5. Implement each task, following the instructions.
6. When all tickets are completed then run:
```sh
npm test
```
The terminal will let you know which tasks passed and failed.

### Tasks

### Ticket 1: Sorting an array of numbers in ascending order.

Function: `sortArray()`

Description: Here you must take the array of numbers and return a new array with the numbers sorted
in ascending order. Feel free to use an algorithm of your choice.

Example:
```typescript
sortArray([1,4,3,2]); // returns [1,2,3,4]
```

### Ticket 2: Capitalize the first letter of each word in a string.

Function: `capitalized()`

Description: This function takes in a string and capitalizes each word and returns a new string.

Example:
```typescript
capitalized("hey, guys"); // returns "Hey, Guys"
```
### Ticket 3: Return the summation of a given number.

Function: `summation()`

Description: This function takes in a whole number (integer) and returns the sum of all the digits from 1 to that number.

Example:
```typescript
summation(3); // returns 6 (1+2+3)
summation(10); // returns 55 (1+2+3+4+5+6+7+8+9+10)

```
### Ticket 4: Multiply each number in an array by the square of the index and then sums the new array together.

Function: `multiplyByIndex()`

Description: This function takes in an array of numbers, multiplies each number by the square of its index, and then returns the sum of the new array.

Example:
```typescript
multiplyByIndex([2,3,4]); // returns 19 ([2*0,3*1,4*4] => [0,3,16] => 0+3+16 = 19) 
```
### Ticket 5: Check if a string is a palindrome.
Function: `isPalindrome()`

Description: This function takes in a string and returns a boolean value indicating whether the string is a palindrome. A palindrome is a word that reads the same backwards as forwards.

Example:
```typescript
isPalindrome("racecar"); // returns true
isPalindrome("hello"); // returns false
```