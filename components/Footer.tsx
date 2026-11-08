interface FooterProps {
  copyright: string;
  note: string;
}

export function Footer({ copyright, note }: FooterProps) {
  return (
    <footer className="foot">
      <span className="mono">{copyright}</span>
      <span className="mono">{note}</span>
    </footer>
  );
}
