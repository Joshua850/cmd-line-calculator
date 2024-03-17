const calculator = (input) => {    
    let signs = ["-", "+", "/", "*"];
  
    let array=input
    let result = input[0];
  
    for (i = 0; i < input.length; i++) {
      if (signs.includes(input[i])) {
          let char=input[i]
      
          if (char === "*")
              result= result * input[i + 1];
          
            else if (char === "/") 
              result=result / input[i + 1];
          
             else if (char === "+")
            result=result + input[i + 1];  
             
             else
             result=result - input[i + 1];
          }
         
      }console.log(result)
  }

const input = process.argv;
let finalInput = [];
for (let i = 2; i <= process.argv.length - 1; i++) {
  if (isNaN(parseInt(process.argv[i]))) {
        finalInput.push(process.argv[i]);
  } else 
    finalInput.push(parseInt(process.argv[i]));
}

calculator(finalInput);
  