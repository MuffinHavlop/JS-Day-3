//task 1
let base = prompt("Enter base")
let height = prompt("Enter height")

let area = (base * height)/2
console.log(`The area of the triangle is ${area}`)

//taks 2
let a = prompt("Enter side a")
let b = prompt("Enter side b")
let c = prompt("Enter side c")

let perimeter = + a + b + c
console.log(`The perimeter of the triangle is ${perimeter}`)

//task 3
let lenght = prompt("Enter the rectangle lenght")
let width = prompt("Enter the rectangle width")

let area_rec = lenght * width 
console.log(`the area of the rectangle is: ${area_rec}`)

let perimeter_rec = (lenght + width)*2
console.log(`the perimeter of the rectangle is: ${perimeter_rec}`)

//task 4
const PI = 3.14
let radius = prompt("Enter the radius of the circle")

let area_circle = PI*radius*radius
console.log(`the area of the circle is ${area_circle}`)

let circumference = 2*PI*radius
console.log(`the circumference of the circle is ${circumference}`)

//task 5
//task 6
let x1 = 2
let x2 = 6
let y1 = 2
let y2 = 10

let slope = (y2 - y1)/(x2 - x1)
console.log(`the slope between (${x1}, ${y1}) and (${x2}, ${y2}) is ${slope}`)

//task 7
//task 8
//task 9
let hours = prompt("Enter hours of work")
let rate = prompt("Enter the rate per hours")

let weekly_earning = hours * rate
console.log(`Your weekly rearning is ${weekly_earning}$`)

//task 10
let user_name = prompt("Enter your name")

user_name.length < 7
    ? console.log(`your name is short`)
    : console.log(`your name is long`)

//task 11
let firstname = "Muffin"
let lastname = "Havlop"

firstname.length < lastname.length
    ? console.log(`your first name ${firstname} is longer than your family name ${lastname}`)
    : console.log(`your family name ${lastname} is longer than your first name ${firstname}`)

//task 12
let myAge = 250
let yourAge = 25

let older = myAge - yourAge

console.log(`I'm older than you ${older} years`)

//task 13
let year_of_birth = prompt("Enter your birthyear")
let current_year = 2022

let age = current_year - year_of_birth
let year_till_can_drive = 18 - age

age < 18
    ? console.log(`you are ${age}, you will allowed to drive after ${year_till_can_drive} years`)
    : console.log(`you are ${age}, you are old enough to drive`)

//task 14
let years_lived = prompt("Enter the number of years you have lived")

let seconds_lived = years_lived * 31556926 

console.log(`you have lived ${seconds_lived} seconds`)