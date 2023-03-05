/*Conversion of roman numerals to decimals can be a tricky experience, especially when dealing with numbers of a large value. Design a program that will handle the conversion between decimal to roman and roman to decimal.

Note: All values entered should be considered string values

e.g.(890->DCCCXC; LXXXVIII->88)

The range of numbers will be limited to 0-3999 (no negative numbers). 

 

Symbol | Value

I : 1

V : 5

X : 10

L : 50

C : 100

D : 500

M : 1,000

 

Input Format

Only one line should be provided for input. Additionally, only one value should be entered at a time.

 

Output Format

The calculated conversion value should be printed onto the screen. Only one line of value should be displayed. Also only one value should be printed at any given run.

 

Sample Input

1800

Sample Output

MDCCC

*/

// define what the roman values are to the symbols
// need a subtract for larger numbers
// iterate through and return an output in a string/number


const romanLetters = {
  I: 1,

  V: 5,

  X: 10,

  L: 50,

  C: 100,

  D: 500,

  M: 1000,

};



function convertFromRoman(input) {
  //base
//   if (!input) {
//     return false;
//   }

  let output = 0;

  for (let i = 0; i < input.length; i++) {
    if (romanLetters[input[i]] < romanLetters[input[i + 1]]) {
        output -= romanLetters[input[i]];
    } else {
        output += romanLetters[input[i]];
    }
    
  }
  return output;
}


console.log(convertFromRoman('III'))
console.log(convertFromRoman('V'))
console.log(convertFromRoman('IV'))
console.log(convertFromRoman('XIX'))
console.log(convertFromRoman('MDCCCXI'))