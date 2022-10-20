//**Problem 2 :** Check whether a string is palindrome or not.
let str="madam";
nstr="";
for(i=str.length-1;i>=0;i--){
  nstr+=str[i];
}if(str==nstr){
  console.log("string is not a palindrome");
}
else{
  console.log("string is palindrome");
}
