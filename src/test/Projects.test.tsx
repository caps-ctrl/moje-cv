import { render, screen } from "@testing-library/react";
import Projects, { projects } from "../pages/Projects";
import "@testing-library/jest-dom";

vi.mock("../components/useWidth", () => ({
  useWidth: () => 1024,
}));

vi.mock("framer-motion", async () => {
  const actual = vi.importActual("framer-motion");

  return {
    ...actual,
    motion: {
      div: ({ whileInView, whileHover, ...rest }: any) => <div {...rest} />,
    },
  };
});

describe("Projects", () => {
  it("should display all projects", () => {
    render(<Projects />);
    screen.debug();
    expect(screen.getAllByRole("img").length).toBe(projects.length);
  });
  it("should display correct title fo each Project", async () => {
    render(<Projects />);

    for (const project of projects) {
      const el = await screen.findByText(project.title);
      expect(el).toBeInTheDocument();
    }
  });
});
