import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ButtonLink } from "./button-link";

// mocked function

describe("ButtonLink", () => {
  it("ButtonLink component renders correctly", () => {
    const tree = renderer.create(<ButtonLink href='/' >Click Me</ ButtonLink>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the button", () => {
    render(<ButtonLink href='/' >Click Me</ ButtonLink>);

    const button = screen.getByTestId("button");

    expect(button).toHaveAttribute('background-color', '#023610');
    expect(button).toHaveAttribute('color', '#fff');
    expect(button).toHaveAttribute('cursor', 'pointer');
  });
});
