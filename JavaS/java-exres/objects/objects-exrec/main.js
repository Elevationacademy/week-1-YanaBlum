//exrec1

// let p1 = {
// name: "or" , 
// age: 30 ,
// city: "rehovot"
// }

// let p2 = {
//   name: "tal" , 
//   age: 20 ,
//   city: "tel aviv"
//   }

//   if (p1.age == p2.age && p1.city == p2.city) {
//     console.log("or wanted to date tal") 
//   }else{
//     console.log("or wanted to date tal, but couldn't")
//   }
    

//exrec2+3


// let myList = [
//   {
//     color: 'green',
//   },
//   {
//     color: 'red'
//   }
// ]

// myList[0].color = "blue"
// myList.pop()

// //console.log(myList[0].color)


// let myList2 = [
//   {
//     name: 'yana',
//   },
//   {
//     name: 'adir'
//   }
// ]

// myList.push(...myList2)

// // console.log(myList)

// //exres 4

// let library = {
//   books: [
//     {
//       title: "sex",
//       author: "yana",
//     },
//     {
//       title: "badSex",
//       author: "girls",
//     },
//   ]
// }


// myList.push(...library.books)
// console.log(myList)


//exrec 5+5.1+5.2


const reservations = {
  bob: { claimed: false },
  ted: { claimed: true },
}

const name = prompt('Please enter the name for your reservation').toLowerCase()

if(reservations[name]){
  if(reservations[name].claimed === true) {
    console.log('Welcome ' + name)
  } else {
    console.log('Go fucker yourself fuceker')
  }
} else {
  console.log("You have no reservation") 
    reservations[name] = { claimed: true }

  }


console.log(reservations)


//bad code !!!!!!! Uncaught TypeError: Cannot read property 'claimed' of undefined


// if(reservations[name].claimed === true) {
//   console.log('Welcome ' + name)
// } else if((reservations[name].claimed === false)) {
//   console.log('Go fucker yourself fuceker')
// } else {
//   console.log("You have no reservation")
// }