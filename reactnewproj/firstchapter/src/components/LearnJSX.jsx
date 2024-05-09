
export const LearnJSX = () => {
    let model = "h73247"
  return (
    <>
        {/* React.createElement("h1", "null", "LearnJSX 1") */}
        <h1>LearnJSX 1</h1>
        <h1>LearnJSX 2</h1>

        {/* javascript expression in JSX */}
        <h1>Price: {10 +40}</h1>
    <h1>Dell {model}</h1>

    {/* Attribute in jsx */}
    <h1 className="bg-primary">Learn JSX 3</h1>
    <h1 className={model}>Learn JSX </h1>

    </>
  )
}
