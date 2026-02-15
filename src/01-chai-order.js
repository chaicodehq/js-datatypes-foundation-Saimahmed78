/**
 * ☕ Chai Tapri Order System - String Basics
 *
 * Guddu ki chai tapri hai college ke bahar. Customers order dete hain,
 * aur Guddu ko string methods use karke orders handle karne hain.
 * Tu Guddu ka helper hai — basic string methods seekh aur orders process kar!
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 *   .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 

 *

 *

 *   
 *
 * @example
 *   getChaiOrderLength("  masala chai  ")  // => 11
 *   shoutChaiOrder("masala chai")          // => "MASALA CHAI"
 *   hasSpecialIngredient("Elaichi Chai", "elaichi")  // => true
 
 1. getChaiOrderLength(order)
 *      - Pehle .trim() se extra spaces hatao, phir .length se count karo
 *      - Agar order string nahi hai, return -1
 *      - Example: getChaiOrderLength("  masala chai  ") => 11
 * */
export function getChaiOrderLength(order) {
  // Your code here
  if(typeof order !="string") return -1
  let trimmedOrder=(order.trim()).length
  return trimmedOrder
}
console.log("chai order length",getChaiOrderLength(2))
 /*   2. shoutChaiOrder(order)
 *      - Guddu apne helper ko UPPERCASE mein order shout karta hai
 *      - Pehle .trim() karo, phir .toUpperCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: shoutChaiOrder("masala chai") => "MASALA CHAI"
 * */
export function shoutChaiOrder(order) {
  if(typeof order!="string") return ""
  let UpperCaseOrder= (order.trim()).toUpperCase()
  if(UpperCaseOrder.length==0) return ""
  return UpperCaseOrder
}

 /*   3. whisperChaiOrder(order)
 *      - Jab koi secretly order karta hai, lowercase mein likho
 *      - Pehle .trim() karo, phir .toLowerCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: whisperChaiOrder("ADRAK CHAI") => "adrak chai"
 * **/
console.log("shotout order",shoutChaiOrder("    "))
export function whisperChaiOrder(order) {
   if(typeof order!="string") return ""
   let LowerCaseOrder=order.trim().toLowerCase()
   if(LowerCaseOrder.length==0) return ""
   return LowerCaseOrder
}
console.log(whisperChaiOrder("Saim Ahmed"))

 /*   4. hasSpecialIngredient(order, ingredient)
 *      - Check karo ki order mein koi special ingredient hai ya nahi
 *      - Dono ko .toLowerCase() karo, phir .includes() use karo
 *      - Agar koi bhi string nahi hai, return false
 *      - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
 */
export function hasSpecialIngredient(order, ingredient) {
  if((typeof order != "string")||(typeof ingredient != "string")) return  false
  const lowerCaseOrder= order.toLowerCase()
  const lowerCaseIngredient = ingredient.toLowerCase()
 return (lowerCaseOrder.includes(lowerCaseIngredient))
}

console.log(hasSpecialIngredient("elaichi Special Chai","elaichi"))

/*  
 5. getFirstAndLastChar(order)
 *      - .charAt(0) se pehla character aur .at(-1) se aakhri character nikalo
 *      - Pehle .trim() karo
 *      - Return: { first, last }
 *      - Agar order string nahi hai ya trim ke baad empty hai, return null
 *      - Example: getFirstAndLastChar("masala chai") => { first: "m", last: "i" }
 */

export function getFirstAndLastChar(order) {
  // Your code heres
  if (typeof order != "string"  ) return null
  let trimmedOrder = order.trim()
  if(trimmedOrder.length==0) return null
  return {first:trimmedOrder.charAt(0), last:trimmedOrder.charAt(trimmedOrder.length-1)}
}
console.log("saim".charAt("saim".length-1))
console.log(getFirstAndLastChar("saim"))

