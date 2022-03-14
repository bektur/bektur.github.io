import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders exchanges app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Top 10 Crtypto Exchanges/i);
  expect(linkElement).toBeInTheDocument();
});
