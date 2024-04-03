import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Page from "../app/page";

describe("Page", () => {
  it('Page component renders correctly', () => {
    const tree = renderer
      .create(<Page />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
