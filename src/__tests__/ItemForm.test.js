import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";
import App from "../components/App";

test("calls the onItemFormSubmit callback prop when the form is submitted", () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  fireEvent.change(screen.getByLabelText(/Name:/), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.getByLabelText(/Category:/), {
    target: { value: "Dessert" },
  });

  fireEvent.click(screen.getByRole("button", { name: /Add Item/i }));

  expect(onItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      id: expect.any(String),
      name: "Ice Cream",
      category: "Dessert",
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  render(<App />);

  const dessertCount = screen.queryAllByText(/Dessert/).length;

  fireEvent.change(screen.getByLabelText(/Name:/), {
    target: { value: "Ice Cream" },
  });

  fireEvent.change(screen.getByLabelText(/Category:/), {
    target: { value: "Dessert" },
  });

  // Change this line to click the button
  fireEvent.click(screen.getByRole("button", { name: /Add Item/i }));

  expect(screen.getByText(/Ice Cream/)).toBeInTheDocument();
  expect(screen.queryAllByText(/Dessert/).length).toBe(dessertCount + 1);
});
