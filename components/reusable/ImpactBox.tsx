interface ImpactBoxProps {
  children: React.ReactNode;
}

export function ImpactBox({ children }: ImpactBoxProps) {
  return (
    <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-md flex flex-row gap-4 items-center opacity-50 dark:opacity-75">
      {children}
    </div>
  );
}
