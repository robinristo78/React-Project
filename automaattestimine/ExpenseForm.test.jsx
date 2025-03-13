import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExpenseForm from "@components/NewExpense/ExpenseForm.jsx";

// Test to check if the form renders with all fields
test("Vorm kuvab õiged sisendväljad", () => {
  render(<ExpenseForm />);

  expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/amount/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
});

// Test for adding a new expense
test("Uue kulutuse lisamine", async () => {
  render(<ExpenseForm />);

  const titleInput = screen.getByLabelText(/title/i);
  const amountInput = screen.getByLabelText(/amount/i);
  const dateInput = screen.getByLabelText(/date/i);
  const submitButton = screen.getByText(/add expense/i);

  await userEvent.type(titleInput, "Test Expense");
  await userEvent.type(amountInput, "50");
  await userEvent.type(dateInput, "2025-01-01");
  await userEvent.click(submitButton);

  expect(titleInput.value).toBe("");
  expect(amountInput.value).toBe("");
  expect(dateInput.value).toBe("");
});

// Test to ensure negative amounts are not allowed
test("Summa ei saa olla negatiivne", async () => {
  render(<ExpenseForm />);

  const amountInput = screen.getByLabelText(/amount/i);
  const submitButton = screen.getByText(/add expense/i);

  await userEvent.type(amountInput, "-10");
  await userEvent.click(submitButton);

  expect(screen.getByText(/amount must be positive/i)).toBeInTheDocument();
});

// Test to check date validation
test("Vormi kuupäeva valideerimine", async () => {
  render(<ExpenseForm />);

  const dateInput = screen.getByLabelText(/date/i);
  const submitButton = screen.getByText(/add expense/i);

  await userEvent.type(dateInput, "2099-12-31");
  await userEvent.click(submitButton);

  expect(screen.getByText(/invalid date/i)).toBeInTheDocument();
});

// Test to ensure title is required
test("Kulutuse pealkirja täitmise nõue", async () => {
  render(<ExpenseForm />);

  const submitButton = screen.getByText(/add expense/i);
  await userEvent.click(submitButton);

  expect(screen.getByText(/title is required/i)).toBeInTheDocument();
});