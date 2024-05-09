import { useState, useMemo } from "react";

export const LearnUseMemo = () => {
  const [count, setCount] = useState(0)

  const handleIncreaseCount = () => {
    console.log("Increase count function");
    setCount(count + 1)
}

const [randomNumber, setRandomNumber] = useState(null);
const generateRandomNumber = () => {
  console.log("Generate Random Number function");
    const newRandomNumber = Math.floor(Math.random() * 100) + 1; //generates a random number between 1 and 100
    setRandomNumber(newRandomNumber);
};

// const isCountTen = () => {
//   console.log("isCountTen called");
//   if(count === 10) {
//     return "Yes"
//   }
//   return "No"
// }

const isCountTen = useMemo(() => {
  console.log("isCountTen called");
  if(count === 10) {
    return "Yes"
  }
  return "No"
}, [count])

  return (
    <>
    {/* <h1>is {count} equal to 10 ? ----{isCountTen()}</h1> */}

    <h1>is {count} equal to 10 ? ----{isCountTen}</h1>
    <button onClick={handleIncreaseCount}>Increase Count</button>
    <hr />
    <h2>Random Number: {randomNumber}</h2>
    <button onClick={generateRandomNumber}>Generate Random Number</button>
    </>
  )
}
