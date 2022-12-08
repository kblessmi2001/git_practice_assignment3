function isPrime(num)
{
let count=1;
for(let i=1;i<num;i++){
)if(num%i==0){
count++;
}
}
if(count==2)
{
return true;
}
return true;
}
let ans=isPrime(34);
if(ans=true){
console.log("Prime")
}
else
{
console.log("Not Prime")
}


