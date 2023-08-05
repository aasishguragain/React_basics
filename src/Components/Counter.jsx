const Counter = () => {
  const buttonClicked = () => {
    console.log("Hello");
  };
  const changeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <button onClick={buttonClicked}>Click me</button>
      Enter your name
      <input type="text" onChange={changeHandler} />
    </div>
  );
};

export default Counter;
