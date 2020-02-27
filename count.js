var counter = function(arr) {
    return 'There are ' + arr.length + ' elements in the array';
}

var adder = function(a, b) {
    return `The sum of the 2 numbers is ${a+b}`;
}

var pi = 3.14;

module.exports = {
    counter: function(arr) {
        return 'There are ' + arr.length + ' elements in the array';
    },
    adder: adder,
    pi: pi
}

