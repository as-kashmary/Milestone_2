let n=prompt("How many strings? ");
a=[];
for(let i=0;i<n;i++){
    a[i]=prompt();
}a.sort();
console.log("minimum: "+a[0]+" maximum: "+a[a.length -1]);