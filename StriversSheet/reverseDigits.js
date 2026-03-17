// let n = 100040000;
// let digit = 0;
// let tracker = 1;

// let revNum = 0;

// while (n > 0) {

//     digit = n % 10;
//     // console.log("digit", digit);
//     // console.log("tracker", tracker);

// //     if (tracker == 1 && digit != 0) {
// //         process.stdout.write(digit.toString());
// //         // console.log("first if");
// //         tracker = 0;
// //     }
// //     else if (tracker == 0 && digit == 0) {
// //         process.stdout.write(digit.toString());
// //         // console.log("second if");
// //         tracker = 1;
// //     }
// // //tr 2;
//   revNum = revNum * 10 + digit;

//     n = Math.floor(n / 10);
//  process.stdout.write(revNum.toString());
// }

class Solution {
    // Function to reverse digits of a number
    reverseNumber(n) {
        // Variable to store reversed number
        let revNum = 0;

        // Loop until all digits are processed
        while (n > 0) {
            // Get the last digit
            let lastDigit = n % 10;

            // Append it to the reversed number
            revNum = revNum * 10 + lastDigit;
console.log("revNum", revNum);
            // Remove the last digit from n
            n = Math.floor(n / 10);
        }

        // Return the reversed number
        return revNum;
    }
}

// Driver code
const obj = new Solution();
const num = 220096;
console.log(obj.reverseNumber(num));  // Output: 54321


console.log(Math.floor(num));