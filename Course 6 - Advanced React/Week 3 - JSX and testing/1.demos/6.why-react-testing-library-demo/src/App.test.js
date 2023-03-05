import { render, screen } from "@testing-library/react";
import App from './App';

test("renders a link that points to Little Lemon webpage", () => {
  render(<App />);
  const linkElement = screen.getByText("Little Lemon Restaurant");
  expect(linkElement).toBeInTheDocument();
});
