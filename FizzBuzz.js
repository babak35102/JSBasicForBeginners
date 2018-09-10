// divisible by 3               => Fizz
// divisible by 5               => Buzz
// divisible by both 3 and 5    => FizzBuzz
// Not divisible by 3 or 5      => input
// Not a number                 => 'Not a number'
const output = FizzBuzz(60);
console.log(output);

function FizzBuzz(input) {
    if (isNaN(input) || input == false || input == true)
        return "Not a number";
    else if (input % 15 === 0)
        return "FizzBuzz";
    else if (input % 5 === 0)
        return "Buzz";
    else if (input % 3 === 0)
        return "Fizz";
    else
        return input;
}