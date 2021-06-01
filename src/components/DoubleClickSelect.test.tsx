import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { DoubleClickSelect } from "./DoubleClickSelect";
import renderer from "react-test-renderer";

afterEach(cleanup);

describe("Double click select", () => {
  const options: Array<String> = ["option 1", "option 2", "option-3"];
  const val: String = "option 1";
  const onChange = () => {};

  render(<DoubleClickSelect options={options} val={val} onChange={onChange} />);

  const displayer = screen.getByTestId("val-displayer");
  const main = screen.getByTestId("main-select");
  const optionsElements = screen.getAllByTestId("option");

  test("should show displayer", () => {
    expect(displayer).toBeVisible();
    expect(main).not.toBeVisible();
    expect(optionsElements[0]).not.toBeVisible();
  });
  test("should match snapshots", () => {
    const tree = renderer.create(
      <DoubleClickSelect options={options} val={val} onChange={onChange} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
