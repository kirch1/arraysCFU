var fruits = ["apple","grape","banana","cherry"];
var quantities = [2,7,1,9];
var needMore = [true,false,true,false];

//The pop method will remove and return the last element in the fruits array, which is "cherry";
fruits.pop();

//The push method will add the element 6 to the end of the quantites array.
quantities.push(6);

//The slice method below  will return a portion of the array starting from index 1 and ending at 3. 3 is not included
needMore.slice(1,3);

//An index is the position of the element in an array. We can use the index to acess values in the array.
//Assuming the arrays index correspond to eachother, the strin interpolation below prints information about the product
console.log(`The product ${fruits[1]} has a stock quantity of ${quantities[1]} and it is ${needMore[1]} that we need more.`)
