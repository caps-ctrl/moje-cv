import { screen, render } from "@testing-library/react";
import NavBar from "../components/NavBar";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import { it, expect, describe } from "vitest";
beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

describe("navbar", () => {
  it("wyswieetlanie ul", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const ul = screen.getByRole("list");
    expect(ul).toBeInTheDocument();
  });
});
