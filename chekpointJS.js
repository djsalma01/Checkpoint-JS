//EXO 1
arr =[1,5,10,89,50]
arr.sort((a,b)=>{if (a<b) return -1
if(a>b) return 1})
let n= arr.length-1
console.log("min = ", arr[0]," max = ", arr[arr.length-1])
//EXO2

function equal_nbr(nbr1,nbr2)
{
    if (nbr1 === nbr2) return true
    else return false

 } 
 
 console.log(equal_nbr(28,1))
 
//EXO3

var arr = [1, 2, 3, "4", 5, 3]

arr = arr.filter(function(item) {
    return  (typeof item !== 'string')
})

console.log(arr)

//EXO4

var arr2 = [1, 2, -3, 5, 3]
let summe =0
arr2.forEach((item) => {
  
    return (summe += Math.abs(item))
})
console.log(summe)

//EXO 5


var True_false = [true, false, false, true, false]
let s= 0
True_false.forEach(function(item) {
    if (item === true)s +=1
    return s

})
console.log(s)

// EXO 6

  inkLevels = {
    "cyan": 700,
    "magenta": 700,
    "yellow": 0
  }
  // ➞ 0
  let val =Object.values(inkLevels)
  const finder = val.find((item) => item == 0);
  if(finder == 0) console.log("0")
  else console.log(  Math.max(...val))
  
//EXO 7
inkLevels ={
  "cyan": 700,
  "magenta": 700,
  "yellow": 0
}

const key= Object.keys(inkLevels)
const table= []
key.forEach((item) =>table.push([item ,inkLevels[item]]))
console.log(table)

//Exo8
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) 
//➞ 65700

var summe = 0
getBudgets.forEach((item)=>  summe += item.budget )
console.log(summe)


//Exo 9
afterNYears ={
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}

var n=1
var x= Object.keys(afterNYears)
const age = x.forEach((item) =>   afterNYears [item] += 1)
console.log(afterNYears)

//EXO 10

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}
var names= Object.keys(GUEST_LIST)
console.log(names)
var guest="Karla"
const phrase = names.find((item) =>  item == guest   )
  if ( phrase)  console.log ("Hi! I'm "+guest+" and I'm from "+ GUEST_LIST[guest])
  else console.log ("I'm a guest")
console.log(phrase)


