export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex items-center justify-center bg-[url('/background2.webp')] bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  );
}
