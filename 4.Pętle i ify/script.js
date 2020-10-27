// zadanie 1

let a = 6;
let b = 7;
if (a>b)
  {
    console.log(a);
  }
else
  {
    console.log(b);
  }


  // zadanie 2 

let a = 4;
let b = 6;
let c = 3;
if (a>b && a>c)
  {
    console.log(a);
  }
else if (b>a && b>c)
  {
    console.log(b);
  }
else if (c>a && c>b)
  {
    console.log(c);
  }


  // zadanie 3

for (var i=0; i<10; i++)
  {
    console.log("Lubię JavaScript");
  }


  // zadanie 4

    let result = 0;
  for (var i =1;i<11;i++)
    {
      result += i;
    }
  console.log(result)


  // zadanie 5

  var n = 5;
for(var i=0;i<=n;i++)
  {
    if(i%2==0)
      {
        console.log(i+" parzysta");
      }
    else
      {
        console.log(i+" nieparzysta");
      }
  }


  //zadanie 6
  for( var i=0; i<5; i++)
  {
    for(var j=0; j<i+3;j++)
      {
        console.log("i= " + i + ", j= " + j);
      }
  }


  // zadanie 7


  console.log(0);
for (var i=1; i<=100;i++)
  {
    if(i%3==0)
      {
        console.log("Fizz");
      }
    else if (i%5==0)
      {
        console.log("Buzz");
      }
    else if (i%15==0)
      {
        console.log("FizzBuzz");
      }
    else
      {
        console.log(i);
      }
  }
