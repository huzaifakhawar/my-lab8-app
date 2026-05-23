export const metadata = {
  title: "Lab 8 - Vercel",
  description: "Vercel Deployment Lab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
