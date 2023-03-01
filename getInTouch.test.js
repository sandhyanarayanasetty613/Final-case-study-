import { screen, render } from "@testing-library/react";
import ContactForm from "../getInTouch";

describe("Contact form Component", () => {
  it("Checking whether text is present", () => {
    render(<ContactForm />);
    const element = screen.getByText(/get in touch/i)
    expect(element).toBeInTheDocument;
  });
  it("Checking the input fields ", () => {
    render(<ContactForm />);
    const element = screen.getByText(/get in touch/i)
    expect(element).toBeInTheDocument;
  });
});