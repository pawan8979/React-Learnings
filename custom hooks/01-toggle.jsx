import useToggle from "./useToggle";

const ToggleExample = () => {
  const { show, toggle } = useToggle(false);

  return (
    <div>
      <h4>Toggle Custom Hook</h4>
      <button type="button" className="btn" onClick={toggle}>
        Toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
