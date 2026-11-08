import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  name: string;
}

export function Header({ name }: HeaderProps) {
  return (
    <header className="top">
      <Link className="brand" href="#top">
        {name}
      </Link>
      <nav className="nav" aria-label="Sections">
        <a href="#focus">Focus</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
