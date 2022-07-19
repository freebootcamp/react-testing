import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("rendering of Greeting is working", () => {
    render(<Greeting />);
    const greetingElement = screen.getByText(/greeting/i);
    expect(greetingElement).toBeInTheDocument();
  });

  test("rendering of props message is working", () => {
    render(<Greeting message="Hello World!" header="Welcome" />);
    const greetingElement = screen.getByText("Hello World!", { exact: false });
    expect(greetingElement).toBeInTheDocument();
  });
});
