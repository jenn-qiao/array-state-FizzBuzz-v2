import {useState} from "react";

export default function FizzBuzz(): JSX.Element {

const [numberFromCurrentRender, queueRerenderWithNewNumber] = 
useState(1)

const [stringFromCurrentRender, queueRerenderWithNewString] = 
useState("")

const [storedValueFromCurrentRender, queueRerenderWithNewStoredValue] = 
useState<(string|number)[]>([])

const handleCurrentValue = () => {
    queueRerenderWithNewNumber(numberFromCurrentRender+1);
    queueRerenderWithNewStoredValue([...storedValueFromCurrentRender,numberFromCurrentRender]);
    

};

const handleCurrentFizz = () => {
    queueRerenderWithNewString("Fizz");
    queueRerenderWithNewStoredValue([...storedValueFromCurrentRender,"Fizz"]);
    queueRerenderWithNewNumber(numberFromCurrentRender+1);



};

const handleCurrentBuzz = () => {
    queueRerenderWithNewString("Buzz");
    queueRerenderWithNewStoredValue([...storedValueFromCurrentRender,"Buzz"]);
    queueRerenderWithNewNumber(numberFromCurrentRender+1);

};

const handleCurrentFizzBuzz = () => {
    queueRerenderWithNewString("FizzBuzz");
    queueRerenderWithNewStoredValue([...storedValueFromCurrentRender,"FizzBuzz"]);
    queueRerenderWithNewNumber(numberFromCurrentRender+1);

};



    return (
        <>
            <h1> FizzBuzz Count </h1>
            
            <p>{storedValueFromCurrentRender.join("  ")} </p>
            <button onClick={
                (()=>{
                    if (numberFromCurrentRender % 3 == 0) {
                        return handleCurrentFizz()
                    } else if (numberFromCurrentRender % 5 == 0) {
                        return handleCurrentBuzz()
                    } else if (numberFromCurrentRender % 15 == 0) {
                        return handleCurrentFizzBuzz()
                    } else {
                        return handleCurrentValue() 
                    }
                }
                )
            }>NEXT</button>
            <hr/>
      </>
    )
}