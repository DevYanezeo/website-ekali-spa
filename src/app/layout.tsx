import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Ekali SpA",
  description: "Consultoría de desarrollo full-stack y soluciones Microsoft Azure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-background text-foreground min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 w-full pt-18">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
