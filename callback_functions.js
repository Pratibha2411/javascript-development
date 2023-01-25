// callback = a function passed as an argument to another function.
            //   It ensures that a function is not going to run before a task is completed. Helps us develop asynchronous code.(When one function has to wait for another function) that helps us avoid errors and potential problems. For demonstration: We can wait for a file to load then can perform another task
            
// Non-effective way/Without using callbacks:
// let total = sum(3,3);
// displayConsole(total);
// displayDOM(total);

// function sum(x,y){
//     let result = x + y;
//     return result;
// }

// function displayConsole(output){
//     console.log(output);
// }
// function displayDOM(output){
//     document.getElementById("afterSubmitClick").innerHTML = `${output}: display DOM`;
// }



// Using callbacks & Effective way:

sum(3,4, displayDOM, displayConsole); //we can pass many callBack functions as we want as an argument

function sum(x,y, displayDOMCallbackFunctionForAnotherFunction, displayConsoleCallbackFunction){
    let result = x + y;
    displayDOMCallbackFunctionForAnotherFunction(result);
    displayConsoleCallbackFunction(result);
    //invoking the function displayDOM or displayConsole, its like we changed the name as a argument for these functions and we have parameter in those specific functions which is output so pass the argument in displayDOMCallbackFunctionForAnotherFunction here as well in case here it's: result
}

function displayDOM(output){
    document.getElementById("afterSubmitClick").innerHTML = `${output}: display DOM callback`;
}
function displayConsole(output){
    console.log(`${output} display console usign callbacks`);
}