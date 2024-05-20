import "./globals.css";
export const metadata = {
  title: "Catalogo De Produtos",
  description:
    "Projeto desenvolvido para empresa dbragas com objetivo de efetuar uma prova para amostrar minhas habilidades na programação.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-screen">{children}</div>
      </body>
    </html>
  );
}
