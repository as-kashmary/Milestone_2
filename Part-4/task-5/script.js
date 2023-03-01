function p(a){
    let t=0;
    for(let b=0;b<a.length;b++){
        t+=a[b];
        
    }
    
    return t/a.length;
}
const a=[];
a[0]=1;
a[1]=2;
a[2]=3;
a[3]=4;
console.log(p(a)); 
