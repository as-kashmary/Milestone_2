function add(a){
    strk="";
    for(let b=a.length -1;b>=0;b--){
        strk+=a[b];
    }
    return strk;
}
console.log(add("hello"));