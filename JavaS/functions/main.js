// const greet = function(){
//   console.log("Hello there")
// }
// greet()

// const tellAJoke = function(){
//   console.log("blablabla")

// }
// tellAJoke()


// const greet = function(name){
//   console.log("Hello there, " + name)
// }
// greet("dexter")

// const thisGal = "yana"
// greet(thisGal) // prints "Hello there, yana"

// const names = ["Mr. Woods", "Sir Newton", "Lady Gamora", "Her Highness Kayla", "Master Shen", "Squire Carl", "The Eternal Brittany"]

// for(let n of names){
//   greet(n)
// }


// const greet = function(name, timeOfDay){
//   console.log("Good " + timeOfDay + ", " + name)
// }

// //calling the function
// greet("Darrell", "Evening")



// const haveA = function(name , timeOfDay){
//   console.log("good " + timeOfDay + ", " + name)
// }
// haveA("yana" , "morning")



// const createUser = function(name, age){
//   const user = {name: name, age: age}
//   console.log(user)
// }

// createUser("William", 27) // prints {name: "William", age: 27}



// const growOld = function(user){
//   user.age++
// }

// const aDude = {name:"Ayd Ood", age: 23}
// growOld(aDude)

// console.log(aDude) // prints {name: "Ayd Ood", age: 24}



// const greet = function(name){
//   console.log("Hello, " + name)
// }

// const growOld = function(user){
//   user.age++
// }


// greet() // prints "Hello, undefined"
// growOld() // throws an error


// const multiply = function(x, y = 2){
//   console.log(x * y)
// }

// multiply(3, 4) // prints 12
// multiply(3) // prints 6


// const changeArray = function(arr){
//   let innerArray = arr
//   innerArray[0] = 50
// }

// const numbers = [1, 2, 3]

// changeArray(numbers)
// console.log(numbers) // prints [50, 2, 3]


// const findSmallest = function(numbers){
//   let smallest = numbers[0]

//   for(let num of numbers){
//     if(num < smallest){
//       smallest = num
//     }
//   }

//   return smallest
// }

// const ages = [17, 21, 9, 34]
// const youngest = findSmallest(ages)
// const abc =[2,3]
// const youngest = findSmallest(abc)

// console.log(youngest) // prints 9




const add = function(x, y){
  const sum = x + y
  return sum
  console.log("Returned " + sum)
}

add(1, 2)


