


for(let i = 1; i <= 100; i++ ){
    
    if (i % 3 == 0 && i % 5 == 0) {
        x = i;
        x = `FizzBuzz`;
        console.log(x);


    }else if (i % 3 == 0) {
        x = i;
        x = `Fizz`;
        console.log(x);


    } else if (i % 5 == 0) {
        x = i;
        x = `Buzz`;
        console.log(x);
    }


    console.log(i);

}