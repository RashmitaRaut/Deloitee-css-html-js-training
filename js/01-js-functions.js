
// callback 

// // number value 
// const fun = (a) => {
//     console.log(a * 2);
// }; 

// fun(10); // anonymous value 

// const num = 11; // named value 
// fun(num);

// // object value 
// const fun = (a) => {
//     console.log(a.city);
// };
// fun({ city: 'Pune' });

// // FUNCTION value 
const fun2 = (arg) => {
    arg({ city: 'Pune' }); // function call 
    console.log('fun function invoked');
};

fun2((place) => {
    console.log('anonymous function invoked.');
    console.log('The city is:', place.city);
});

console.log('one');

setTimeout(() => {
    console.log('two');
}, 1000);

console.log('three');



// const callbackFun = () => {
//     console.log('named function called.');
// }
// fun(callbackFun);