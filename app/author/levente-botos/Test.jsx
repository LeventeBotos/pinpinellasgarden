import React, { useState } from "react";

const Test = () => {
  const [num, setNum] = useState(0);
  return <button onClick={() => setNum(num + 1)}>{num}</button>;
};

export default Test;
