interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-semibold text-center">
      {children}
    </h2>
  );
}
