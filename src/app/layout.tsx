import Routeguard from "../../components/root/Routeguard";
import "../../assets/CSS/root.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Routeguard>{children}</Routeguard>
      </body>
    </html>
  );
}
