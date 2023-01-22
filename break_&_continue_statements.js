// break = breaks out of a loop entirely
// continue = skip and iteration of a loop

for (let i = 1; i < 17; i += 1){
    if(i == 10){
        continue;
    } else if(i == 16){
        break;
    }
    console.log(i);
}