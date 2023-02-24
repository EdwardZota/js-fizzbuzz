


for(let i = 1; i <= 100; i++ ){
    
    if (i % 3 == 0 && i % 5 == 0) {
        x = `FizzBuzz`;
        console.log(x);


    }else if (i % 3 == 0) {
        x = `Fizz`;
        console.log(x);


    } else if (i % 5 == 0) {
        x = `Buzz`;
        console.log(x);
    }


    console.log(i);

}