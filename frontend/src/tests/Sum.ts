export default function Sum(...numbers:number[]){
    // sample test function that returns sum of all numbers in numbers array
    return numbers.reduce((total,number)=>total+number,0)
}