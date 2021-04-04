import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './Congrats';
import {findByTestAttr} from '../../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props) => shallow(<Congrats {...props} />)

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'congrats-component');
  expect(appComponent.length).toBe(1);
});

test("render no text when success prop is false", () => {
  const wrapper = setup({success: false})
  console.log(wrapper.debug());
  const appComponent = findByTestAttr(wrapper, 'success-message')
  expect(appComponent.text()).toBe('');
});

test("render non-empty congrats message when success prop is true", () => {
  const wrapper = setup({success: true})
  console.log(wrapper.debug());
  const appComponent = findByTestAttr(wrapper, 'success-message');
  expect(appComponent.text()).toBe('Congrats!!');
});
