‎‎// 1. Write a JavaScript program to print numbers from 1 to 10.
‎
‎for (let i = 1; i <= 10; i++) {
‎    console.log(i);
‎}
‎‎// 2. Write a JavaScript program to find the sum of first 10 natural numbers.
‎
‎let sum = 0;
‎for (let i = 1; i <= 10; i++) {
‎    sum += i;
‎}
‎console.log("Sum is: " + sum);
‎
‎// 3. Write a JavaScript program to find the factorial of a number.
‎
‎let num = 5;
‎let fact = 1;
‎for (let i = 1; i <= num; i++) {
‎    fact *= i;
‎}
‎console.log("Factorial is: " + fact);

‎// 4. Write a JavaScript program to check if a number is even or odd.
‎
‎let number = 7;
‎if (number % 2 === 0) {
‎    console.log("Even");
‎} else {
‎    console.log("Odd");
‎}
‎// 5. Write a JavaScript program to find the largest of two numbers.
‎
‎let a = 10;
‎let b = 20;
‎
‎if (a > b) {
‎    console.log("Largest is: " + a);
‎} else {
‎    console.log("Largest is: " + b);
‎}

// 6. Write a JavaScript program to check if a number is positive, negative or zero.
‎
‎let n = -5;
‎
‎if (n > 0) {
‎    console.log("Positive");
‎} else if (n < 0) {
‎    console.log("Negative");
‎} else {
‎    console.log("Zero");
‎}

‎// 7. Write a JavaScript program to print multiplication table of 5.
‎
‎let table = 5;
‎
‎for (let i = 1; i <= 10; i++) {
‎    console.log(table + " x " + i + " = " + (table * i));
‎}

‎// 8. Write a JavaScript program to reverse a string.
‎
‎let str = "hello";
‎let reversed = "";
‎
‎for (let i = str.length - 1; i >= 0; i--) {
‎    reversed += str[i];
‎}
‎
‎console.log("Reversed: " + reversed);

‎// 9. Write a JavaScript program to count vowels in a string.
‎
‎let text = "javascript";
‎let count = 0;
‎
‎for (let i = 0; i < text.length; i++) {
‎    if ("aeiou".includes(text[i])) {
‎        count++;
‎    }
‎}
‎
‎console.log("Vowel count: " + count);

‎// 10. Write a JavaScript program to find the largest number in an array.
‎
‎let arr = [5, 12, 8, 20, 3];
‎let max = arr[0];
‎
‎for (let i = 1; i < arr.length; i++) {
‎    if (arr[i] > max) {
‎        max = arr[i];
‎    }
‎}
‎
‎console.log("Largest number: " + max);
‎
‎// 11. Write a JavaScript program to find the smallest number in an array.
‎
‎let min = arr[0];
‎
‎for (let i = 1; i < arr.length; i++) {
‎    if (arr[i] < min) {
‎        min = arr[i];
‎    }
‎}
‎
‎console.log("Smallest number: " + min);

‎// 12. Write a JavaScript program to check if a string is palindrome.
‎
‎let word = "madam";
‎let rev = "";
‎
‎for (let i = word.length - 1; i >= 0; i--) {
‎    rev += word[i];
‎}
‎
‎if (word === rev) {
‎    console.log("Palindrome");
‎} else {
‎    console.log("Not Palindrome");
‎}

‎// 13. Write a JavaScript program to find the sum of elements in an array.
‎
‎let total = 0;
‎
‎for (let i = 0; i < arr.length; i++) {
‎    total += arr[i];
‎}
‎
‎console.log("Array sum: " + total);

‎// 14. Write a JavaScript program to swap two numbers.
‎
‎let x = 5;
‎let y = 10;
‎
‎let temp = x;
‎x = y;
‎y = temp;
‎
‎console.log("x: " + x + ", y: " + y);

‎// 15. Write a JavaScript program to check if a number is prime.
‎
‎let prime = 7;
‎let isPrime = true;
‎
‎for (let i = 2; i < prime; i++) {
‎    if (prime % i === 0) {
‎        isPrime = false;
‎        break;
‎    }
‎}
‎
‎if (isPrime && prime > 1) {
‎    console.log("Prime");
‎} else {
‎    console.log("Not Prime");
‎}‎

// 16. Write a JavaScript program to find the square of numbers from 1 to 5.
‎
‎for (let i = 1; i <= 5; i++) {
‎    console.log("Square of " + i + " is: " + (i * i));
‎}‎

// 17. Write a JavaScript program to convert Celsius to Fahrenheit.
‎
‎let celsius = 25;
‎let fahrenheit = (celsius * 9/5) + 32;
‎
‎console.log("Fahrenheit: " + fahrenheit);

‎// 18. Write a JavaScript program to check if a year is leap year.
‎
‎let year = 2024;
‎
‎if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
‎    console.log("Leap Year");
‎} else {
‎    console.log("Not Leap Year");
‎}‎

  // 19. Write a JavaScript program to print Fibonacci series up to 10 terms.
‎
‎let f1 = 0, f2 = 1;
‎
‎console.log(f1);
‎console.log(f2);
‎
‎for (let i = 3; i <= 10; i++) {
‎    let next = f1 + f2;
‎    console.log(next);
‎    f1 = f2;
‎    f2 = next;
‎}
‎
‎// Write a JavaScript program to count digits of a number.
‎
‎let digitNumber = 12345;
‎let digitCount = 0;
‎
‎while (digitNumber > 0) {
‎    digitCount++;
‎    digitNumber = Math.floor(digitNumber / 10);
‎}
‎
‎console.log("Digit count: " + digitCount);

‎// Write a JavaScript program to find the square of numbers from 1 to 10.
‎
‎for (let i = 1; i <= 10; i++) {
‎    console.log(i + " square = " + (i * i));
‎}

‎// 22. Write a JavaScript program to find the cube of numbers from 1 to 10.
‎
‎for (let i = 1; i <= 10; i++) {
‎    console.log(i + " cube = " + (i * i * i));
‎}‎

// 23. Write a JavaScript program to count numbers from 10 to 1.
‎
‎for (let i = 10; i >= 1; i--) {
‎    console.log(i);
‎}‎

// 24. Write a JavaScript program to find the sum of even numbers from 1 to 20.
‎
‎let sumEven = 0;
‎
‎for (let i = 1; i <= 20; i++) {
‎    if (i % 2 === 0) {
‎        sumEven += i;
‎    }
‎}
‎
‎console.log("Sum of even numbers: " + sumEven);

‎// 25. Write a JavaScript program to print all even numbers from 1 to 50.
‎
‎for (let i = 1; i <= 50; i++) {
‎    if (i % 2 === 0) {
‎        console.log(i);
‎    }
‎}
‎
‎‎// 26. Write a JavaScript program to print all odd numbers from 1 to 50.
‎
‎for (let i = 1; i <= 50; i++) {
‎    if (i % 2 !== 0) {
‎        console.log(i);
‎    }
‎}

‎// 27. Write a JavaScript program to calculate the average of 5 numbers.
‎
‎let a = 10;
‎let b = 20;
‎let c = 30;
‎let d = 40;
‎let e = 50;
‎
‎let avg = (a + b + c + d + e) / 5;
‎
‎console.log("Average = " + avg);‎

// 28. Write a JavaScript program to swap two numbers.
‎
‎let x = 5;
‎let y = 10;
‎
‎let temp = x;
‎x = y;
‎y = temp;
‎
‎console.log("x = " + x);
‎console.log("y = " + y);

‎// 29. Write a JavaScript program to find the length of a string.
‎
‎let str = "JavaScript";
‎
‎console.log("Length = " + str.length);‎

// 30. Write a JavaScript program to convert Celsius to Fahrenheit.
‎
‎let celsius = 25;
‎
‎let fahrenheit = (celsius * 9/5) + 32;
‎
‎console.log("Fahrenheit = " + fahrenheit);
‎
‎‎// 31. Write a JavaScript program to find the sum of digits of a number.
‎
‎let number = 1234;
‎let sum = 0;
‎
‎while (number > 0) {
‎    sum += number % 10;
‎    number = Math.floor(number / 10);
‎}
‎
‎console.log("Sum of digits = " + sum);
‎
‎‎// 32. Write a JavaScript program to find the largest of three numbers.
‎
‎let n1 = 10;
‎let n2 = 25;
‎let n3 = 15;
‎
‎if (n1 > n2 && n1 > n3) {
‎    console.log("Largest = " + n1);
‎} else if (n2 > n3) {
‎    console.log("Largest = " + n2);
‎} else {
‎    console.log("Largest = " + n3);
‎}

‎// 33. Write a JavaScript program to check if a number is divisible by 5.
‎
‎let num = 20;
‎
‎if (num % 5 === 0) {
‎    console.log("Divisible by 5");
‎} else {
‎    console.log("Not divisible by 5");
‎}

‎// 34. Write a JavaScript program to print numbers from 1 to 100.
‎
‎for (let i = 1; i <= 100; i++) {
‎    console.log(i);
‎}‎

  // 35. Write a JavaScript program to print the first 10 multiples of 3.
‎
‎for (let i = 1; i <= 10; i++) {
‎    console.log(3 * i);
‎}
‎
‎// 36. Write a JavaScript program to check if a year is a leap year.
‎
‎let year = 2024;
‎
‎if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
‎    console.log("Leap Year");
‎} else {
‎    console.log("Not a Leap Year");
‎}
‎
‎// 37. Write a JavaScript program to find the maximum number in an array.
‎
‎let arr = [10, 5, 30, 25, 15];
‎
‎let max = arr[0];
‎
‎for (let i = 1; i < arr.length; i++) {
‎    if (arr[i] > max) {
‎        max = arr[i];
‎    }
‎}
‎
‎console.log("Maximum = " + max);

‎// 38. Write a JavaScript program to find the minimum number in an array.
‎
‎let min = arr[0];
‎
‎for (let i = 1; i < arr.length; i++) {
‎    if (arr[i] < min) {
‎        min = arr[i];
‎    }
‎}
‎
‎console.log("Minimum = " + min);

‎// 39. Write a JavaScript program to count vowels in a string.
‎
‎let text = "Hello World";
‎let count = 0;
‎
‎for (let i = 0; i < text.length; i++) {
‎    let ch = text[i].toLowerCase();
‎    if (ch === "a" ch === "e" ch === "i" ch === "o" ch === "u") {
‎        count++;
‎    }
‎}
‎
‎console.log("Vowel count = " + count);
‎
‎‎// 40. Write a JavaScript program to reverse a number.
‎
‎let num1 = 12345;
‎let rev = 0;
‎
‎while (num1 > 0) {
‎    rev = rev * 10 + (num1 % 10);
‎    num1 = Math.floor(num1 / 10);
‎}
‎
‎console.log("Reversed number = " + rev);
‎
‎‎// 41. Write a JavaScript program to find duplicate elements in an array.
‎
‎let arr1 = [1, 2, 3, 2, 4, 5, 1];
‎let duplicates = [];
‎
‎for (let i = 0; i < arr1.length; i++) {
‎    for (let j = i + 1; j < arr1.length; j++) {
‎        if (arr1[i] === arr1[j] && !duplicates.includes(arr1[i])) {
‎            duplicates.push(arr1[i]);
‎        }
‎    }
‎}
‎
‎console.log("Duplicates:", duplicates);

‎// 42. Write a JavaScript program to remove duplicates from an array.
‎
‎let unique = [];
‎
‎for (let i = 0; i < arr1.length; i++) {
‎    if (!unique.includes(arr1[i])) {
‎        unique.push(arr1[i]);
‎    }
‎}
‎
‎console.log("Unique array:", unique);
‎
‎
‎‎// 43. Write a JavaScript program to sort an array (ascending).
‎
‎let arr2 = [5, 2, 9, 1, 7];
‎
‎for (let i = 0; i < arr2.length; i++) {
‎    for (let j = i + 1; j < arr2.length; j++) {
‎        if (arr2[i] > arr2[j]) {
‎            let temp = arr2[i];
‎            arr2[i] = arr2[j];
‎            arr2[j] = temp;
‎        }
‎    }
‎}
‎
‎console.log("Sorted:", arr2);

// 44. Write a JavaScript program to find the second largest number.
‎
‎let max = -Infinity, second = -Infinity;
‎
‎for (let i = 0; i < arr2.length; i++) {
‎    if (arr2[i] > max) {
‎        second = max;
‎        max = arr2[i];
‎    } else if (arr2[i] > second && arr2[i] !== max) {
‎        second = arr2[i];
‎    }
‎}
‎
‎console.log("Second largest:", second);

‎
‎// 45. Write a JavaScript program to find intersection of two arrays.
‎
‎let inter = [];
‎
‎for (let i = 0; i < a1.length; i++) {
‎    if (a2.includes(a1[i])) {
‎        inter.push(a1[i]);
‎    }
‎}
‎
‎console.log("Intersection:", inter);
‎
‎
‎‎// 46. Write a JavaScript program to count frequency of elements.
‎
‎let freq = {};
‎
‎for (let i = 0; i < arr1.length; i++) {
‎    let val = arr1[i];
‎    freq[val] = (freq[val] || 0) + 1;
‎}
‎
‎console.log("Frequency:", freq);‎

// 47. Write a JavaScript program to check anagram strings.
‎
‎let s1 = "listen";
‎let s2 = "silent";
‎
‎let sort1 = s1.split("").sort().join("");
‎let sort2 = s2.split("").sort().join("");
‎
‎if (sort1 === sort2) {
‎    console.log("Anagram");
‎} else {
‎    console.log("Not Anagram");
‎}
‎
‎‎// 48. Write a JavaScript program to find longest word in a sentence.
‎
‎let sentence = "I love programming in JavaScript";
‎let words = sentence.split(" ");
‎let longest = "";
‎
‎for (let i = 0; i < words.length; i++) {
‎    if (words[i].length > longest.length) {
‎        longest = words[i];
‎    }
‎}
‎
‎console.log("Longest word:", longest);
‎
‎
‎‎// 49. Write a JavaScript program to capitalize first letter of each word.
‎
‎let text1 = "hello world";
‎let result = "";
‎
‎let parts = text1.split(" ");
‎
‎for (let i = 0; i < parts.length; i++) {
‎    result += parts[i][0].toUpperCase() + parts[i].slice(1) + " ";
‎}
‎
‎console.log(result.trim());
‎
‎// 50. Write a JavaScript program to flatten a nested array.
‎
‎let nested = [1, [2, 3], [4, [5]]];
‎let flat = [];
‎
‎function flatten(arr) {
‎    for (let i = 0; i < arr.length; i++) {
‎        if (Array.isArray(arr[i])) {
‎            flatten(arr[i]);
‎        } else {
‎            flat.push(arr[i]);
‎        }
‎    }
‎}
‎
‎flatten(nested);
‎console.log("Flatten:", flat);
‎
‎‎// 51. Write a JavaScript program to implement stack (push, pop).
‎
‎let stack = [];
‎
‎stack.push(10);
‎stack.push(20);
‎stack.push(30);
‎
‎console.log(stack.pop());
‎console.log(stack);

‎// 52. Write a JavaScript program to implement queue.
‎
‎let queue = [];
‎
‎queue.push(1);
‎queue.push(2);
‎queue.push(3);
‎
‎console.log(queue.shift());
‎console.log(queue);
‎
‎‎// 53. Write a JavaScript program to debounce a function.
‎
‎function debounce(fn, delay) {
‎    let timer;
‎    return function () {
‎        clearTimeout(timer);
‎        timer = setTimeout(() => fn(), delay);
‎    };
‎}

‎// 54. Write a JavaScript program to throttle a function.
‎
‎function throttle(fn, limit) {
‎    let wait = false;
‎    return function () {
‎        if (!wait) {
‎            fn();
‎            wait = true;
‎            setTimeout(() => wait = false, limit);
‎        }
‎    };
‎}
‎
‎‎// 55. Write a JavaScript program to deep clone an object.
‎
‎let obj = { a: 1, b: { c: 2 } };
‎
‎let clone = JSON.parse(JSON.stringify(obj));
‎
‎console.log(clone);

‎// 56. Write a JavaScript program to check if object is empty.
‎
‎let obj2 = {};
‎
‎if (Object.keys(obj2).length === 0) {
‎    console.log("Empty object");
‎}
‎
