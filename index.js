
"use strict"

//this is a global scope **I.N => weherever js run there will be js runtime, in this case js run on the browser so that we get the [window object]
console.log(this)
//=============================

//without "use strict" mode it refers to global object
function withOutStrictMode() {
    console.log(this)
}
withOutStrictMode()
//=====================================

//with "use strict" mode it refers undefind
function withStrictMode() {
    "use strict"
    console.log(this)
}
withStrictMode() //undefind
window.withStrictMode() // window
//=====================================

// Q => why this this happend in strict mode
//ans => this call it "THIS SUBSTITUTION". if there is "THIS" value will be undefind or null than "THIS" value will be replace by GLOBAL object. {only in non strict mode}

//but one catch there if we write 
window.withStrictMode() // here we get the window object becasuse here we get a refarence of window

// NOW LETS SEE HOW THIS 
//** if a function call into a object then it call a method **/

let obj = {
    a: 10,
    b: function () {
        let self = this
        function inner() {
            console.log('------------------', self.a)
        }
        inner()
    }
}
obj.b()

let obj2 = {
    a: 10,
    b: () => {
        console.log('this.a-----------', this) // here we get undefind
    }
}
obj2.b()

let obj3 = {
    a: 10,
    b: function () {
       let innerArrow = () => {
            console.log('this.a----**-------', this) // here we get value bcz it treat like  b: function () {console.log(this)}
        }
        innerArrow()
    }
}
obj3.b()













































// // function countNumber(){
// //     let count = 0
// //      function increment(){
// //       return  count +=  1
// //     }
// //     return increment
// // }
// // console.log(countNumber())
// // console.log(countNumber())
// // console.log(countNumber())
// // console.log(countNumber())


// function ParentFunction() {

//     var parentVariable = 60;

//     return function ChildFunction() {
//         return parentVariable += 1;
//     }

// }
// var executeChild = ParentFunction();

// console.log(ParentFunction()())
// console.log(ParentFunction()())
// // console.log(executeChild())
// // console.log(executeChild())
// // console.log(executeChild())
