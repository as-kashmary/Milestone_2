function p(a){
    for(let b=2;b<a;b++){
        if(a%b ==0){
            return "Not prime";
        }
    }
    
    return "Prime";
}
console.log(p(144)); 
