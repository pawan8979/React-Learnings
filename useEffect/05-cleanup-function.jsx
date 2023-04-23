import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setToggle(!toggle)}>
        toggle
      </button>
      {toggle ? <SomeComp /> : null}
      {toggle && <RandomComponent />}
    </div>
  );
};

const SomeComp = () => {
  useEffect(() => {
    console.log("I am use Effect");
  }, []);
  return <h2>Working</h2>;
};

const RandomComponent = () => {
  useEffect(() => {
    // console.log('hmm, this is interesting');
    const intID = setInterval(() => {
      console.log("hello from interval");
    }, 1000);
    // does not stop, keeps going
    // every time we render component new interval gets created
    return () => clearInterval(intID);
  }, []);

  return <h1>hello there</h1>;
};

export default CleanupFunction;
