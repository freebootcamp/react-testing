import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Async from "./Async";

describe("Async component", () => {
  test("Show not before change without clicking the button", async () => {
    render(<Async />);
    const elementsArray = await screen.findAllByRole("listitem");
    expect(elementsArray).not.toHaveLength(0);
  });

  test("With mocking", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          userId: 1000,
          id: 10,
          title: "Mocked Value",
          body: "Mocked body",
        },
      ],
    });
    render(<Async />);
    const elementsArray = await screen.findAllByRole("listitem");
    console.log(elementsArray);
    expect(elementsArray).toHaveLength(1);
  });
});
