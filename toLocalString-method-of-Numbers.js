// toLocaleString() = returns a stirng with a language with sensitive representation of this Number
//     Number.toLocaleString(locale,{options});
//         'locale' = specify that language(undefined = default set in your browser)
//         'options' = object with formatting options


let myNumber = 1234321.100;

// myNumber = myNumber.toLocaleString("en-US");
// myNumber = myNumber.toLocaleString("en-US", {style: "currency", currency: "USD"});
console.log(`USA formation- ${myNumber}`);

// myNumber = myNumber.toLocaleString("hi-IN");
myNumber = myNumber.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
console.log(`India formation- ${myNumber}`);

// myNumber = myNumber.toLocaleString("de-DE");
myNumber = myNumber.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
console.log(`standard German formation- ${myNumber}`);

// there's other styles like percentile and etc go look for that if wanna use but it rare we use these