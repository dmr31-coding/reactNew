

// export const LearnProps = (props) => {
//   return (
//     <>
//     <h1>LearnProps</h1>
//     <h2>{props.name}</h2>
//     <h2>{props.roll}</h2>

//     </>
//   )
// }


export const LearnProps = ({name, roll}) => {
    return (
      <>
      <h1>LearnProps</h1>
      <h2>{name}</h2>
      <h2>{roll}</h2>
  
      </>
    )
  }
  