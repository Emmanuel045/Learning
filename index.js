// var name = "Mike"
// var age = 30
// var ismarried = true

// declaration -> variable -> initialization

// var, let, const

// var name = "Mike"
// var name = "Alex"
// console.log(name)

// let name = "John"
// let name = "Doe"
// console.log(name) // This will throw an error because 'name' has already been declared with 'let'

// data type 
// String, Number, Boolean (condition), Null (empty), Undefined (not initialized), Object (structure), array (group), function

// let name = "Mike" // String "" or ''
// console.log(typeof name)

// let age = 30.4567 // Number
// console.log(typeof age)

// let ismarried = true // Boolean
// console.log(typeof ismarried)

// let person = {
//     name: "Emmanuel",
//     age: 30,
//     ismarried: true
// }
// console.log(person)

// let item = ["Alex", 20, True, {name: "Emmanuel"}]
// console.log(item)

// // Operators
// // +, -, *, %, /

// const num1 = 50
// const num2 = 100
// const num3 = 10

// const result = num2 * num3
// console.log(result)

// Assignment/Compound Operators (+=, -=, *=, /=, %=)

// let num1 = 10
// num1 += 5 // num1 = num1 + 5
// console.log(num1)

// Comparison Operators (==(value), ===(type and value), !=(value), !==(type and value), >, <, >=, <=)

// const num1 = 50
// const num2 = "50"
// const result = num1 >= num2
// console.log(result)

// let item = ["Alex", 20, true, {name: "Emmanuel"}]
// console.log(item[3])

// let firstName = "Emmanuel"
// let lastName = "Onyekwere"
// console.log(lastName + " " + firstName) // Concatenation

// let numbers = {
//     num1: 50,
//     num2: 200,
//     num3: 200
// }
// console.log(numbers.num2) // This will throw an error because 'num2' is not defined in this scope. You should access it as 'numbers.num2'.
// const result = numbers.num2 == numbers.num3
// console.log(result)

// Logical Operators (&&, ||, !)
// && AND
// || OR
// ! NOT

// const user = false
// const password = 3

// console.log(user && password) // false
// console.log(user || password) // true
// console.log(!user) // false

// Conditional Statements
// if, else if, else

// if (logic) {
//     // Expression(true)
// }else if (other logic) {
//     // Expression(false)
// } else {
//     // Expression(false)
// }

// const canPlay = true
// const ofAge = 18
// const hasPermission = true
// const isWilling = false

// if (canPlay && (ofAge >= 18)) {
//     console.log("You can be drafted into the official team")
// }else if (hasPermission || (ofAge >= 18) && !isWilling) {
//     console.log("You can learn to play basketball")
// }else if (canPlay && (ofAge < 18)) {
//     console.log("You can play basketball but you can't be drafted into the official team")
// }else if (!canPlay && (ofAge >= 18)) {
//     console.log("You can be trained for the official team")
// }else if (!canPlay && (ofAge < 18)) {
//     console.log("You can't play basketball")
// }else if (!canPlay && (ofAge < 18) && !hasPermission) {
//     console.log("You can't play basketball and you don't have permission")
// }else if (!canPlay && (ofAge < 18) && !hasPermission && !isWilling) {
//     console.log("You can't play basketball, you don't have permission, you are not willing to learn and you are not of age")
// }else{
//     console.log("You should find a different sport to play")
// }

// switch statements

// const day = 7
// switch(day) {
//     case 1:
//         console.log("Today is Sunday")
//         break;
//     case 2:
//         console.log("Today is Monday")
//         break;
//     case 3:
//         console.log("Today is Tuesday")
//         break;
//     case 4:
//         console.log("Today is Wednesday")
//         break;
//     case 5:
//         console.log("Today is Thursday")
//         break;
//     case 6:
//         console.log("Today is Friday")
//         break;
//     case 7:
//         console.log("Today is Saturday")
//         break;
//     default:
//         console.log("Invalid")
//         break;
// }

// Loop
// const foods = ["Rice", "Beans", "Yam", "Plantain", "Fish"]
// for (let i = 0; i < foods.length; i++) {
//     console.log(foods[i])
// }

// for (let food of foods) {
//     console.log(food)
// }

// let x = 0
// while (x < 10) {
    // console.log(x)
    // if (x === 5) {
    //     break; // exit the loop when x is 5
    // }
    // x++;

//     x++;
//     if (x === 5) {
//         continue; // skip x is 5 and continue to the next iteration
//     }
//     console.log(x)
// }

// do{
//     x++
//     console.log(first)
// }while(x < 10)

// functions
function add(a, b) {
    // return "The sum of " + String(a) + " and " + String(b) + " is: " + String(a + b);
    return `The sum of ${a} and ${b} is: ${a + b}`;
}

// console.log(add(4,8))
// console.log(add(3,8))

const result = add(4, 8)
console.log(result)

