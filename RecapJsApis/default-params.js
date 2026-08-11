// parameterized function
function sum(num1, num2) {
    const total = num1 + num2;
    console.log(num1, num2, total);
}

sum(10, 20); // arguments

function FullName(first, last = '1') {
    const name = first + '' + last;
    console.log(name);
}
FullName('AmitSarkar');