interface ParagraphProps {
  children: React.ReactNode;
}

export function Paragraph({ children }: ParagraphProps) {
  return <p className="mt-6 text-lg leading-relaxed">{children}</p>;
}
