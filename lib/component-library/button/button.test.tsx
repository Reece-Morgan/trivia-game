import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Button } from "./button";

// mocked function
const onClickFn = jest.fn();

describe("Button", () => {
  it("Button component renders correctly", () => {
    const tree = renderer.create(<Button onClick={() => null} disabled={false} >Click Me</ Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the button as active", () => {
    render(<Button onClick={() => null} disabled={false} >Click Me</ Button>);

    const button = screen.getByTestId("button");

    expect(button).toHaveAttribute('background-color', '#023610');
    expect(button).toHaveAttribute('color', '#fff');
    expect(button).toHaveAttribute('cursor', 'pointer');
  });

  it("renders the button as disabled", () => {
    render(<Button onClick={() => null} disabled={true} >Click Me</ Button>);

    const button = screen.getByTestId("button");

    expect(button).toHaveAttribute('background-color', '#d3d3d3');
    expect(button).toHaveAttribute('color', '#000');
    expect(button).toHaveAttribute('cursor', 'not-allowed');
  });

  it("fires the onClick if not disabled", () => {
    render(<Button onClick={onClickFn} disabled={false} >Click Me</ Button>);

    const button = screen.getByTestId("button");

    fireEvent.click(button);
    
    expect(onClickFn).toHaveBeenCalled();
  });

  it("doesn't fire the onClick if disabled", () => {
    render(<Button onClick={onClickFn} disabled={true} >Click Me</ Button>);

    const button = screen.getByTestId("button");

    fireEvent.click(button);
    
    expect(onClickFn).not.toHaveBeenCalled();
  });
});
