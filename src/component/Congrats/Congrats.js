import PropTypes from 'prop-types'; // ES6

function Congrats(props) {
  
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

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats;
