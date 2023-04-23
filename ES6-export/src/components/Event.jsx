const Event = () => {
  const handleForm = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };
  const handleButton = () => {
    console.log("handle button click");
  };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("submitted");
  //   };

  return (
    <div>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleForm}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          console.log("submitted");
        }}
      >
        submit
      </button>
      <div>
        <button onClick={handleButton}>CLick me</button>
      </div>
    </div>
  );
};
export default Event;
