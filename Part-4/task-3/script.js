function add(a){
    let s=0;
    for(let b=0;b<a.length;b++){
        s+=a[b];
    }
    
    return s;
}
const a=[];
a[0]=12;
a[1]=13;
a[2]=14;
a[3]=15;
console.log(add(a)); 
