import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Mall | Find the Perfect Rental",
  description: "Find your drem rental property",
  keywords:
    "find rental, find property, apartment, house, real estate, property mall",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
