function sum(){
    let total=0;
    for (let num of arguments){
        total+=num;
    }
    return total;

}
console.log(sum(1,2,3,4,5,6))