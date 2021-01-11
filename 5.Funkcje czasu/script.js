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
