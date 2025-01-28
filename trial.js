const cart = [
    {
        course: "JS",
        cost: 999
    },
    {
        course: "Python",
        cost: 699
    },
    {
        course: "Java",
        cost: 399
    }
]

const val = cart.reduce(function(acc, num){ return acc + num.cost},0)
console.log(val);