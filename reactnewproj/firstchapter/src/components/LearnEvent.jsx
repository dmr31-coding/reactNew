

export const LearnEvent = () => {
    const handleClick1 = (e) => {
        e.preventDefault()
        console.log("Event triggered 1");
    }

    const handleClick2 = (myid) => {
        console.log("Event triggered 2", myid);
    }
  return (
    <>
    {/* without argument */}
    <button onClick={handleClick1}>Click 1</button>

    {/* with argument */}
    <button onClick={(e) => handleClick2("Ef87897")}>Click 2</button>
    </>
  )
}
