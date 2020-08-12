
// const food = ["frise" , "apple" , "corn"]
// console.log(food[1]);


// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
// // // console.log (companies[3])
// // const firstCompany = companies[0]
// // console.log(firstCompany) // prints "Tesla"
// // console.log(firstCompany == companies[0]) // prints true
// //companies[1] = "Twitter";
// // console.log(companies[1]);
// console.log (companies)
// companies.push("Fox Entertainment", "Marvel Studios", "Rolex");



//const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
// console.log(plants.length) // prints 5

// let lastIndex = plants.length - 1 // equal to (5 - 1) = 4
// console.log(plants[lastIndex]) // prints "Yew"
// console.log(plants[4]) // the same


//console.log ("the first plant is" + plants[0] + "  " + "and the last plant is" + plants[plants.length - 1])


//companies.push("Blizzard Entertainment");




//push 



// const myStuff = ["Squid hat", "Portrait of a wizard", "Passport"]

// const lastItem = myStuff[myStuff.length - 1]
// const firstItem = myStuff[0]

// myStuff.unshift(lastItem)
// myStuff.push(firstItem)

// console.log(myStuff) // prints ["Passport", "Squid hat", "Portrait of a wizard", "Passport", "Squid hat"]


// let employees = ["DeMarcus", "Kai", "Christina"]
// let candidates = ["Tiffany", "Elana", "Carl"]
// // employees.push(...candidates)
// // console.log (employees)
// employees.push(...candidates)
// employees.push(candidates[0], candidates[1], candidates[2])
// console.log (employees)



//splise

// let fridge = ["Milk", "Eggplant", "Truffle", "Edible shoe"]
// let removedItem = fridge.splice(3, 1)

// console.log(removedItem) // prints ["Edible shoe"]
// console.log(fridge) // prints ["Milk", "Eggplant", "Truffle"] 


// let onlyLife = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]
// let removeItems = onlyLife.slice(8)
// onlyLife = removeItems
// console.log (onlyLife)

//the right way:
// const associations = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]

// associations.splice(0, associations.length - 1)
// console.log(associations) // prints ["life"]



//add by splise

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");

// console.log (fruits)


//const people = ["Fred", "George", "Ron"]

//people = ["Roger", "Alan", "Hewitt"] // this will throw an error
//people[0] = "Alex" // Roger changed To Alex
//people.push("Bellinda") // add to People
//people.splice(2, 1) // cut ONLY RON
//console.log (people)
