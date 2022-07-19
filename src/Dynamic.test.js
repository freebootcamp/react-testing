import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dynamic from "./Dynamic";

describe("Dynamic component", () => {
  test("Show not before change without clicking the button", () => {
    render(<Dynamic />);
    let elem = screen.getByText("Before change");
    expect(elem).toBeInTheDocument();
  });

  test("Show changed after clicking the button", () => {
    render(<Dynamic />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    userEvent.click(buttonElement);

    const elem = screen.getByText("Changed");
    expect(elem).toBeInTheDocument();
  });
});
