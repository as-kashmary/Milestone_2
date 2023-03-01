a=[];
ans=[];
n=prompt("How many strings: ");
for(let i=0;i<n;i++){
    a[i]=prompt();
    ans[i]=a[i].toUpperCase();
}
for(let i=0;i<n;i++){
    console.log(ans[i]);
}