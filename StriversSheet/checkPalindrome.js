let num =45542;
let revNum = 0;
let digit = 0;

function checkPalindrome(n) {
    while (n > 0) {
        digit = n % 10;

        revNum = revNum * 10 + digit;

        n = Math.floor(n);

    }


 if (num === revNum)
        console.log("number is palindrome");
    else
        console.log("number is not a palindrome");

   
}
checkPalindrome(num);

