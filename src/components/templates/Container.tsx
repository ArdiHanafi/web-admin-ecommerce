export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 w-full rounded-sm bg-base-200 p-4">{children}</div>
  );
}
