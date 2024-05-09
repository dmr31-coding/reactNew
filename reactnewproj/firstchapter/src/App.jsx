import { CounterApp } from "./components/CounterApp"
import { LearnComponent } from "./components/LearnComponent"
import { LearnEvent } from "./components/LearnEvent"
import { LearnJSX } from "./components/LearnJSX"
import { LearnLiftingStateUp } from "./components/LearnLiftingStateUp"
import { LearnProps } from "./components/LearnProps"
import { LearnState } from "./components/LearnState"
import { LearnUseEffect } from "./components/LearnUseEffect"
import { LearnUseMemo } from "./components/LearnUseMemo"



function App() {
  let rollno = 101
  const getData = (data) => {
    console.log(data);
  }
  return (
    <>
      {/* <LearnComponent /> */}
      {/* <LearnJSX /> */}

      {/* <LearnProps name="Suntali nani" roll={rollno} /> */}

      {/* <LearnEvent /> */}

      {/* <LearnLiftingStateUp myClick={getData} /> */}

      {/* <LearnState /> */}

      {/* <CounterApp /> */}

      {/* <LearnUseEffect /> */}
      
      <LearnUseMemo />
    </>
  )
}

export default App
