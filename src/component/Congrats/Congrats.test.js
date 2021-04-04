import { shallow } from "enzyme";
import Congrats from "./Congrats";
import { findByTestAttr, checkProps } from "../../../test/testUtils";

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setUpProps} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "congrats-component");
  expect(appComponent.length).toBe(1);
});

test("render no text when success prop is false", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "congrats-message");
  expect(appComponent.text()).toBe("");
});

test("render non-empty congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const appComponent = findByTestAttr(wrapper, "congrats-message");
  expect(appComponent.text()).toBe("Congrats!!");
});

test("does not throw error", () => {
  const expectProps = { success: false };
  const propError = checkProps(Congrats, expectProps);
  expect(propError).toBeUndefined();
});
