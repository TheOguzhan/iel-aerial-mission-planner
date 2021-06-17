import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import DoubleClickInput from "./DoubleClickInput";
import renderer from "react-test-renderer";

afterEach(cleanup);

test("should render double click input, but should not show input", () => {
  render(
    <DoubleClickInput
      val={"Dummy"}
      onChange={(e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
      }}
      fixValues={() => {
        console.log("Values fixed");
      }}
    />
  );

  const input = screen.getByTestId("val-input");
  const displayer = screen.getByTestId("val-displayer");

  expect(input).not.toBeVisible();
  expect(displayer).toBeVisible();
});

test("should render double click input and should show input", () => {
  render(
    <DoubleClickInput
      val={"Dummy"}
      onChange={(e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
      }}
      fixValues={() => {
        console.log("Values fixed");
      }}
    />
  );

  const input = screen.getByTestId("val-input");
  const displayer = screen.getByTestId("val-displayer");
  const doubleClicker = screen.getByTestId("doubleClicker");
  fireEvent.dblClick(doubleClicker);

  expect(displayer).not.toBeVisible();
  expect(input).toBeVisible();
});

test("should not render input", () => {
  render(
    <DoubleClickInput
      val={"Dummy"}
      onChange={(e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
      }}
      fixValues={() => {
        console.log("Values fixed");
      }}
      disabled={true}
    />
  );

  const input = screen.getByTestId("val-input");
  const displayer = screen.getByTestId("val-displayer");
  const doubleClicker = screen.getByTestId("doubleClicker");
  fireEvent.dblClick(doubleClicker);

  expect(displayer).toBeVisible();
  expect(input).not.toBeVisible();
});

test("matches snapshots", () => {
  const tree = renderer.create(
    <DoubleClickInput
      val={"Dummy"}
      onChange={(e: React.FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
      }}
      fixValues={() => {
        console.log("Values fixed");
      }}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
