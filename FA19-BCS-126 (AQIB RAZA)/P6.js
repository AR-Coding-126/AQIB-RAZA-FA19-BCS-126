let num=8;
let rand=Math.floor(Math.random()*10);
if (num==rand)
{
    console.log("You WIN");
    console.log(rand,num);
}
else{
    console.log("NOT MATCHED");
    console.log(rand,num);
}