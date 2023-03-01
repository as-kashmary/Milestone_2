const a=[];
l=prompt("How many inputs?");
for(let i=0;i<l;i++){
    a[i]=prompt(i+"th input: ");
}
let min=a[0];
let max=a[0];
for(let i=1;i<a.length;i++){
    if(min>a[i]){
        min=a[i];
    }if(max<a[i]){
        max=a[i];
    }
}console.log(min+" "+max);
//2 3 4 1 5