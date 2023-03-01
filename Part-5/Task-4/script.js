a=[];
ev=[];
let n=prompt("How many integers?");
for(let i=0;i<n;i++){
    a[i]=prompt(i+1+"th input: ");
    a[i]%2==0?ev[ev.length]=a[i]:"";
}
for(let i=0;i<ev.length;i++){
    console.log(ev[i]);
}