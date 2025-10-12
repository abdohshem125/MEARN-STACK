import React, { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setcount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setcount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>get advice</button>
      <Message count={count} />
    </>
  );
}

function Message(props) {
  return (
    <p>
      you have read <strong>{props.count}</strong> advice
    </p>
  );
}
