// These styles apply to every route in the application
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='sm:scroll-smooth'>
      <body>{children}</body>
    </html>
  );
}