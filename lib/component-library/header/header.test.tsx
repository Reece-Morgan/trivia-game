import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Header } from "./header";

describe("Header", () => {
  it("Header component renders correctly", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the heading", () => {
    render(<Header />);

    const heading = screen.getByTestId("header-title");

    expect(heading).toBeInTheDocument();
  });
});
