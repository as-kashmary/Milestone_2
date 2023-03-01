alert("Hello, This is admin hero bot!!"+"\n"+"Are you looking for some arithmatic operation?");
let ans=prompt("Do you want to use user defined function? Y/N");
if(ans=="Y"){
    alert("Guide:: Use variable:x,y,z & sorry this program donot support exponentiation and square root and parenthesis "+"\n"+"Try your best not to use parenthesis");
    let n=prompt("How many variables in this function?(This programm only supports at most three variables): ");
    let str=prompt("Please input you function:");
    let exp1=str.split("");
    let x,y,z;
    if(n==3){
        x=prompt("Value of x : ");
        y=prompt("Value of y : ");
        z=prompt("Value of z : ");
        let f=1,sum=0;
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="x"){
                exp1[i]=x;
            }else if(exp1[i]=="y"){
                exp1[i]=y;
            }else if(exp1[i]=="z"){
                exp1[i]=z;
            }
        }
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="/"){
                
                f=1;
                let abc=exp1[i-1]/exp1[i+1];
                sum+=abc;
                exp1[i-1]=abc;
                if(i!=exp1.length-2){
                    for(let j=i;j<exp1.length;j++){
                        exp1[j]=exp1[j+2];
                    }

                }exp1.pop();
                exp1.pop();
                f=0;
                i-=2; 
                
                
            }
        }
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="*"){
                f=1;
                let abc=exp1[i-1]*exp1[i+1];
                sum+=abc;
                exp1[i-1]=abc;
                if(i!=exp1.length-2){
                    for(let j=i;j<exp1.length;j++){
                        exp1[j]=exp1[j+2];
                    }
                }exp1.pop();
                exp1.pop();
                f=0;
                i-=2;
            }
        }
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="+"){
                f=1;
                let abc=Number(exp1[i-1])+Number(exp1[i+1]);
                sum+=abc;
                exp1[i-1]=abc;
                if(i!=exp1.length-2){
                    for(let j=i;j<exp1.length;j++){
                        exp1[j]=exp1[j+2];
                    }
                } exp1.pop();
                exp1.pop();
                f=0;
                i-=2;
            }
        }
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="-"){
                f=1;
                let abc=exp1[i-1]-exp1[i+1];
                sum+=abc;
                exp1[i-1]=abc;
                if(i!=exp1.length-2){
                    for(let j=i;j<exp1.length;j++){
                        exp1[j]=exp1[j+2];
                    }
                }exp1.pop();
                exp1.pop();
                f=0; 
                i-=2; 
            }
        }
        alert(exp1[0]);
    }else if(n==2){
        x=prompt("Value of x : ");
        y=prompt("Value of y : ");
        
        let f=1,sum=0;
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="x"){
                exp1[i]=x;
            }else if(exp1[i]=="y"){
                exp1[i]=y;
            }
        }
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="/"){
                
                f=1;
                let abc=exp1[i-1]/exp1[i+1];
                sum+=abc;
                exp1[i-1]=abc;
                if(i!=exp1.length-2){
                    for(let j=i;j<exp1.length;j++){
                        exp1[j]=exp1[j+2];
                    }

                }exp1.pop();
                exp1.pop();
                f=0;
                i-=2; 
                
                
            }
        }
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="*"){
                f=1;
                let abc=exp1[i-1]*exp1[i+1];
                sum+=abc;
                exp1[i-1]=abc;
                if(i!=exp1.length-2){
                    for(let j=i;j<exp1.length;j++){
                        exp1[j]=exp1[j+2];
                    }
                }exp1.pop();
                exp1.pop();
                f=0;
                i-=2;
            }
        }
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="+"){
                f=1;
                let abc=Number(exp1[i-1])+Number(exp1[i+1]);
                sum+=abc;
                exp1[i-1]=abc;
                if(i!=exp1.length-2){
                    for(let j=i;j<exp1.length;j++){
                        exp1[j]=exp1[j+2];
                    }
                } exp1.pop();
                exp1.pop();
                f=0;
                i-=2;
            }
        }
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="-"){
                f=1;
                let abc=exp1[i-1]-exp1[i+1];
                sum+=abc;
                exp1[i-1]=abc;
                if(i!=exp1.length-2){
                    for(let j=i;j<exp1.length;j++){
                        exp1[j]=exp1[j+2];
                    }
                }exp1.pop();
                exp1.pop();
                f=0; 
                i-=2; 
            }
        }
        alert(exp1[0]);
    }else if(n==1){
        x=prompt("Value of x : ");     
        let f=1,sum=0;
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="x"){
                exp1[i]=x;
            }
        }
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="/"){
                
                f=1;
                let abc=exp1[i-1]/exp1[i+1];
                sum+=abc;
                exp1[i-1]=abc;
                if(i!=exp1.length-2){
                    for(let j=i;j<exp1.length;j++){
                        exp1[j]=exp1[j+2];
                    }

                }exp1.pop();
                exp1.pop();
                f=0;
                i-=2; 
                
                
            }
        }
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="*"){
                f=1;
                let abc=exp1[i-1]*exp1[i+1];
                sum+=abc;
                exp1[i-1]=abc;
                if(i!=exp1.length-2){
                    for(let j=i;j<exp1.length;j++){
                        exp1[j]=exp1[j+2];
                    }
                }exp1.pop();
                exp1.pop();
                f=0;
                i-=2;
            }
        }
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="+"){
                f=1;
                let abc=Number(exp1[i-1])+Number(exp1[i+1]);
                sum+=abc;
                exp1[i-1]=abc;
                if(i!=exp1.length-2){
                    for(let j=i;j<exp1.length;j++){
                        exp1[j]=exp1[j+2];
                    }
                } exp1.pop();
                exp1.pop();
                f=0;
                i-=2;
            }
        }
        for(let i=0;i<exp1.length;i++){
            if(exp1[i]=="-"){
                f=1;
                let abc=exp1[i-1]-exp1[i+1];
                sum+=abc;
                exp1[i-1]=abc;
                if(i!=exp1.length-2){
                    for(let j=i;j<exp1.length;j++){
                        exp1[j]=exp1[j+2];
                    }
                }exp1.pop();
                exp1.pop();
                f=0; 
                i-=2; 
            }
        }
        alert(exp1[0]);
    }else{
        alert("Number of variables is not in range[1,3]. Start from first!!");
    }
}else if(ans=="N"){
    let op=prompt("PLease select an operation (+,-,*,/,%,exp,sqrt): ");
    if (op=="+"){
        let x=prompt("Enter x (x + y): ");
        let y=prompt("Enter y (x + y)");
        alert("Please check your console for output")
        console.log(x+y);
    }else if(op=="-"){
        let x=prompt("Enter x (x - y): ");
        let y=prompt("Enter y (x - y)");
        alert("Please check your console for output")
        console.log(x-y);
    }else if(op=="*"){
        let x=prompt("Enter x (x * y): ");
        let y=prompt("Enter y (x * y)");
        alert("Please check your console for output")
        console.log(x*y);
    }else if(op=="/"){
        let x=prompt("Enter x (x / y): ");
        let y=prompt("Enter y (x / y)");
        y==0?alert("x can't be divided by 0"):alert("Output: "+x/y);
    }else if(op=="%"){
        let x=prompt("Enter x (x % y): ");
        let y=prompt("Enter y (x % y)");
        y==0?alert("x can't be divided by 0"):alert("Output: "+x%y);
    }else if(op=="exp"){
        let x=prompt("Enter x (x exp y): ");
        let y=prompt("Enter y (x exp y)");
        alert("Please check your console for output")
        console.log(x**y);
    }else if(op=="sqrt"){
        let x=prompt("Enter x : ");
        alert("Please check your console for output")
        console.log(Math.sqrt(x));
    }else{
        alert("Invalid operation; try again from first");
    }

}else{
    alert("Sorry, it's not applicable choice. Please run the program again")
}