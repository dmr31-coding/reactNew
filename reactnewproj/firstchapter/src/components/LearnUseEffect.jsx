import { useEffect, useState } from "react"

export const LearnUseEffect = () => {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
    }

    const [randomNumber, setRandomNumber] = useState(null);
    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 100) + 1; //generates a random number between 1 and 100
        setRandomNumber(newRandomNumber);
    };

    // example-1 : it runs each time when component is mounted and re-render
    // useEffect(() => {
    //     console.log("useEffect called");
    // })

    // example-2 : it runs once when the component is mounted ([] means no dependencies)
    useEffect(() => {
        console.log("useEffect called");
    }, [])

    // example-3 : it runs when the component is mounted and whenever dependence changes.
    useEffect(() => {
        console.log("useEffect called");
    }, [count])

    //example-3 : The cleanup function (the function you return from userEffect) runs when the component unmounts or when the dependenciesin the dependency array change. Since count is in the dependency array, whenever count changes, the cleanup function is called before the new effect runs.
    useEffect(() => {
        console.log("useEffect called");
        return () => {
            console.log("Component will unmount !!");
        }
    }, [count])

  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={handleCount}>Increase Count</button>
    <hr />
    <h2>Random Number: {randomNumber}</h2>
    <button onClick={generateRandomNumber}>Generate Random Number</button>
    </>
  )
}
