import checkPropTypes from "check-prop-types"; // ES6

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, conformingPropTypes) => {
  console.log(conformingPropTypes);
  const propError = checkPropTypes(
    component.propTypes,
    conformingPropTypes,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
