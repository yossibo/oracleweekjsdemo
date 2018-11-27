
function mulNum(n1:number, n2:number) :number {
    return n1 * n2;
}

//mulNum("a", "b"); //COMPILATION ERROR --> Argument of type '"a"' is not assignable to parameter of type 'number'.
//mulNum(1,2,3,4);  //COMPILATION ERROR --> Expected 2 arguments, but got 4

let res: number = mulNum(1, 2);

console.log(res); //--> 2
document.write(res.toString());