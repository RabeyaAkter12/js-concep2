function findLargestNumber(num1, num2, num3) {
    if(num1 > num2 && num1 > num3){
       console.log(num1)
    }
    else if(num2 > num1 && num2 > num3){
        console.log(num2)
    }
    else{
        console.log(num3)
    }
}
findLargestNumber(7, 9, 8)
findLargestNumber(5, 3, 8)




function findLargestNumber2(num1, num2, num3) {
    if(num1 > num2 && num1 > num3){
       return (num1)
    }
    else if(num2 > num1 && num2 > num3){
       return (num2)
    }
    else{
        return (num3)
    }
}
console.log(findLargestNumber2(7, 9, 8))
console.log(findLargestNumber2(5, 3, 8))