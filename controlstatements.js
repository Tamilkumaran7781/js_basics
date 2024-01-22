//while loop
sum=0
var i=0
while(i<10){
    sum+=i
    i++
}
console.log(sum)
sum=0
i=0
do{
    sum+=i
    i++
}while(i<10);
console.log(sum)


//For loop
sum=0
for(i=0;i<10;i++)
{
    sum+=i
}
console.log(sum)

arr=[10,20,30]
arr1=[10,20,20.5]
arr2=[10,20,true,false]
arr3=[10,"kesaven",true]
console.log(arr)
console.log(arr1)
console.log(arr2)
console.log(arr3)
//for...in
const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
    console.log(key, obj[key]);
}
//for...of