

/* 
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
*/

//Bonus

const containerDom = document.querySelector('.container');

for (let i = 1; i <= 100; i++ ){
    const square = document.createElement('div');
    square.classList.add('card');
    containerDom.append(square);

    if (i % 3 == 0 && i % 5 == 0) {
        x = `FizzBuzz`;
        square.append(x);
        square.classList.add('bg-fizzbuzz');

    }else if (i % 3 == 0) {
        x = `Fizz`;
        square.append(x);
        square.classList.add('bg-fizz');

    } else if (i % 5 == 0) {
        x = `Buzz`;
        square.append(x);
        square.classList.add('bg-buzz');
    } else{
        square.append(i);
        square.classList.add('bg-number');
    }
}