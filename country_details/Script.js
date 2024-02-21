// 
const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload= function (){
    console.log(JSON.parse(this.response))
    const arr=JSON.parse(this.response)
    for(let i=0;i<arr.length;i++)
        {
            
         console.log(i,arr[i].name.common)
         console.log(arr[i].population)
         console.log(arr[i].region)
         console.log(arr[i].subregion)
        }
        console.log("\n")
}