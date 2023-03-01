let n=prompt("Number of persons: ");
a=[];
let b,c;
for(let i=0;i<n;i++){
    ++i;
    b=prompt("Name of "+i+"th person");
    c=prompt("age: ");
    --i;
    a[i]={
        nam:b,
        age:c
    }
}
let max=a[0].age;
let k;
for(let i=0;i<n;i++){
    if(max<a[i].age){
        max=a[i].age;
        k=i;
    }
}
console.log(a[k].nam);
console.log(a[k].age);