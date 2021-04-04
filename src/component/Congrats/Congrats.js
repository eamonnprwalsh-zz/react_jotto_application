function Congrats({ ...props }) {
  console.log(props);

  let successMessage;

  if (props.success) {
    successMessage = <div data-test="congrats-message">Congrats!!</div>;
  } else {
    successMessage = <div data-test="congrats-message"></div>;
  }

  return (
    <div data-test="congrats-component" className="congrats-component">
      {successMessage}
    </div>
  );
}

export default Congrats;
