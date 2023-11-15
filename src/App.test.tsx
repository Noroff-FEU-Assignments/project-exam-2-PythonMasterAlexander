import { render, screen } from "@testing-library/react";
import PageApplication from "./PageApplication";
test("renders learn react link", () => {
  render(<PageApplication />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
