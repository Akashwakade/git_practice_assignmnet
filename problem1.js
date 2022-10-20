//**Problem 1 :** Check whether a number is Prime or not

let num=4;
count=0;
for(i=1;i<=num;i++){
  if(num%i==0){
    count++;
  }
 
}
 if(count==2){
     console.log(num,"is not a prime");
  }
  else{
   console.log(num, "is a prime");
  }