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
‎
