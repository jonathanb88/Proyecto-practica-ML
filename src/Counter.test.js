import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("Counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={2} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(2);
  });

  it("Counter should increment by one if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={2} />);
    const incrementButton = getByRole("button", { name: "Incrementar" });
    fireEvent.click(incrementButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(3);
  });

  it("Counter should decrease by one if the descrease button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={2} />);
    const decreaseButton = getByRole("button", { name: "Disminuir" });
    fireEvent.click(decreaseButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });

  it("Counter should restart and be 0 if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={2} />);
    const restartButton = getByRole("button", { name: "Reiniciar contador" });
    fireEvent.click(restartButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("Counter should be negative if the switchSigns button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={2} />);
    const switchSgnsButton = getByRole("button", { name: "Reiniciar signos" });
    fireEvent.click(switchSgnsButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(-2);
  });
});
