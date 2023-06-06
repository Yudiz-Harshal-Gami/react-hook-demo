import React, { useEffect, useState } from "react";

function UseEffectCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You click ${count} times`
    console.log('click');
  },[count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
    </div>
  );
}

export default UseEffectCounter;
