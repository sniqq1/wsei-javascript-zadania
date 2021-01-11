// zadanie 1 


let counter = 1;
const Hello = () => {
  
   if (counter > 15)
    {
      return;
    }
  console.log("Cześć po raz " + counter);
 
  counter++;
}
setInterval(Hello,3000);


// zadanie 2


const arr = [1,2,3,4,5,6,7,8,9,10];
setTimeout(function () {
  console.log(arr);
  let a = 0;
 let b = setInterval(function () {
    if (a<arr.length){
      console.log(arr[a]);
      a++;
    }
   else{
     clearInterval(b);
   }    
  },3000);
},2000);
