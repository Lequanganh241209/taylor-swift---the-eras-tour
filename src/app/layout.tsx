import type { ReactNode } from 'react';
import '../app/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>Writing Task 2 Assessment</title>
        <meta name="description" content="Comprehensive platform for Writing Task 2 assessment" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
};

export default Layout;
