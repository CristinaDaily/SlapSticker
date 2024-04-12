import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders SlapSticker in an h1 tag", () => {
  render(<App />);
  const title = screen.getByText(/SlapSticker/i);
  expect(title).toBeInTheDocument();
});
