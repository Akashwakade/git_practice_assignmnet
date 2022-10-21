//**Problem 2 :** Check whether a string is palindrome or not.
let str="madam";
let nstr="";
for(i=str.length-1;i>=0;i--){
  nstr+=str[i];
}if(str==nstr){
  console.log("string is palindrome");
}
else{
  console.log("string is not palindrome");
}
