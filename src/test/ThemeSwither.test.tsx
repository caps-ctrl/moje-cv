import { render, screen } from "@testing-library/react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const mockSetTheme = vi.fn();
vi.mock("../components/useTheme", () => ({
  useTheme: () => ({
    setTheme: mockSetTheme,
  }),
}));

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    motion: {
      div: (props: any) => <div {...props} />,
      button: (props: any) => <button {...props} />,
    },
  };
});

describe("ThemeSwitcher", () => {
  it("should display three options of theme", () => {
    render(<ThemeSwitcher />);

    const themes = ["Jasny", "Ciemny", "Systemowy"];
    themes.forEach((theme) => {
      expect(screen.getByText(theme)).toBeInTheDocument();
    });
  });
  it("should  setTheme light onClick jasny", async () => {
    render(<ThemeSwitcher />);
    const user = userEvent.setup();

    const light = screen.getByText("Jasny");

    await user.click(light);

    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });

  it("should  setTheme:dark onClick ciemny", async () => {
    render(<ThemeSwitcher />);

    const user = userEvent.setup();

    const dark = screen.getByText("Ciemny");

    await user.click(dark);

    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("should setTheme:system onClick Ciemny", async () => {
    render(<ThemeSwitcher />);
    const system = screen.getByText("Systemowy");
    const user = userEvent.setup();

    await user.click(system);

    expect(mockSetTheme).toHaveBeenCalledWith("system");
  });
});
