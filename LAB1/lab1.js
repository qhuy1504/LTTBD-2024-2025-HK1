//1. Print numbers from 1 to 10 
function print1to10() {
    document.write("<p> BÀI 1 </p>");
    for (var i = 0; i < 10; i++) {
        document.write(i + 1 + '<br>');
    }
}
//2. Print the odd numbers less than 100 
function printOdd() {
    document.write("<p> BÀI 2 </p>");
    for (var i = 0; i < 100; i++) {
        if (i % 2 != 0) {
            document.write(i + ' ');
        }
    }
}
//3. Print the multiplication table with 7
function printTable7() {
    document.write("<p> BÀI 3 </p>");
    for (var i = 1; i <= 10; i++) {
        document.write('7 x ' + i + ' = ' + 7 * i + '<br>');
    }
}

//4. Print all the multiplication tables with numbers from 1 to 10 
function printAllTable() {
    document.write("<p> BÀI 4 </p>");
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            document.write(i + ' x ' + j + ' = ' + i * j + '<br>');
        }
    }
}

//5. Calculate the sum of numbers from 1 to 10 
function sum1to10() {
    document.write("<p> BÀI 5 sum 1 to 10 </p>");
    var sum = 0;
    for (var i = 0; i < 10; i++) {
        sum += i + 1;
    }
    document.write('Sum = ' + sum);
}
//6. Calculate 10! 
function factorial10() {
    document.write("<p> BÀI 6 factorial 10 </p>");
    var factorial = 1;
    for (var i = 1; i <= 10; i++) {
        factorial *= i;
    }
    document.write('10! = ' + factorial);
}
//7. Calculate the sum of even numbers greater than 10 and less than 30 
function sumEven() {
    document.write("<p> BÀI 7 sum even greater than 10 and less than 30 </p>");
    var sum = 0;
    for (var i = 11; i < 30; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    document.write('Sum = ' + sum);
}
//8. Create a function that will convert from Celsius to Fahrenheit 
function celsiusToFahrenheit(celsius) {
    document.write("<p> BÀI 8 Create a function that will convert from Celsius to Fahrenheit, 37 độ  </p>");
    return document.write(celsius * 9 / 5 + 32);
    
}
//9. Create a function that will convert from Fahrenheit to Celsius 
function fahrenheitToCelsius(fahrenheit) {
    document.write("<p> BÀI 9 Create a function that will convert from Fahrenheit to Celsius, 98 độ </p>");
    return document.write((fahrenheit - 32) * 5 / 9);
}
// 10. Calculate the sum of numbers in an array of numbers 
function sumArray(arr) {
    document.write("<p> BÀI 10 Calculate the sum of numbers in an array of numbers </p>");
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return document.write('Sum = ' + sum);
}
//11. Calculate the average of the numbers in an array of numbers 
function averageArray(arr) {
    document.write("<p> BÀI 11 Calculate the average of the numbers in an array of numbers </p>");
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return document.write('Average = ' + sum / arr.length);
}
//12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers 
function positiveArray(arr) {
    document.write("<p> BÀI 12 Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers </p>");
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i]);
        }
    }
    return document.write(newArr);
}
//13. Find the maximum number in an array of numbers 
function maxArray(arr) {
    document.write("<p> BÀI 13 Find the maximum number in an array of numbers </p>");
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return document.write('Max = ' + max);
}
//14. Print the first 10 Fibonacci numbers without recursion 
function fibonacci() {
    document.write("<p> BÀI 14 Print the first 10 Fibonacci numbers without recursion </p>");
    var a = 0, b = 1, c;
    for (var i = 0; i < 10; i++) {
        document.write(a + ' ');
        c = a + b;
        a = b;
        b = c;
    }
}
//15. Create a function that will find the nth Fibonacci number using recursion 
function fibonacciRecursion(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}
// Display the result in the HTML document
function displayFibonacci(n) {
    document.write("<p>BÀI 15: Create a function that will find the nth Fibonacci number using recursion</p>");
    const result = fibonacciRecursion(n);
    document.write("<p>The " + n + "th Fibonacci number is: " + result + "</p>");
}
//16. Create a function that will return a Boolean specifying if a number is prime 
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
function displayisPrime(n) {
    document.write("<p> BÀI 16 Create a function that will return a Boolean specifying if a number is prime </p>");
    if (isPrime(n)) {
        document.write(n + ' Là số nguyên tố');
    } else {
        document.write(n + ' Không phải là số nguyên tố');
    }
}
//17. Calculate the sum of digits of a positive integer number 
function sumDigits(n) {
    document.write("<p> BÀI 17 Calculate the sum of digits of a positive integer number </p>");
    var sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return document.write('Sum = ' + sum);
}
//18. Print the first 100 prime numbers 
function printPrime() {
    document.write("<p> BÀI 18 Print the first 100 prime numbers </p>");
    var count = 0, i = 2;
    while (count < 100) {
        if (isPrime(i)) {
            document.write(i + ' ');
            count++;
        }
        i++;
    }
}
//19. Create a function that will return in an array the first “p” prime numbers greater than “n” 
function firstPrimeGreater(n, p) {
    document.write("<p> BÀI 19 Create a function that will return in an array the first “p” prime numbers greater than “n” </p>");
    var arr = [];
    for (var i = n + 1; arr.length < p; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    return document.write(arr);
}
//20. Rotate an array to the left 1 position 
function rotateLeft(arr) {
    document.write("<p> BÀI 20 Rotate an array to the left 1 position </p>");
    var first = arr.shift();
    arr.push(first);
    return document.write(arr);
}
//21. Rotate an array to the right 1 position 
function rotateRight(arr) {
    document.write("<p> BÀI 21 Rotate an array to the right 1 position </p>");
    var last = arr.pop();
    arr.unshift(last);
    return document.write(arr);
}
//22. Reverse an array 
function reverseArray(arr) {
    document.write("<p> BÀI 22 Reverse an array </p>");
    return document.write(arr.reverse());
} 
//23. Reverse a string 
function reverseString(str) {
    document.write("<p> BÀI 23 Reverse a string </p>");
    return document.write(str.split('').reverse().join(''));
}
//24. Create a function that will merge two arrays and return the result as a new array 
function mergeArrays(arr1, arr2) {
    document.write("<p> BÀI 24 Create a function that will merge two arrays and return the result as a new array </p>");
    return document.write(arr1.concat(arr2));
}
//25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both 
function mergeArraysNotBoth(arr1, arr2) {
    document.write("<p> BÀI 25 Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both </p>");
    var arr = arr1.concat(arr2);
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr1.indexOf(arr[i]) == -1 || arr2.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    return document.write(newArr);
}
//26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
function mergeArraysNotSecond(arr1, arr2) {
    document.write("<p> BÀI 26 Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second </p>");
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1) {
            newArr.push(arr1[i]);
        }
    }
    return document.write(newArr);
}