// 
const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload= function (){
    const arr=JSON.parse(this.response)
    for(let i=0;i<arr.length;i++)
        {
         console.log(arr[i].flags.png)   
        }
}
