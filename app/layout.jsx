
import Navigation from '../app/components/Navigation.jsx';
import Footer from '../app/components/Footer.jsx';


export const metadata = {
  title: 'Connor D. Wotkowicz • Portfolio',
  description: 'Full-Stack Developer | React • Node.js • PostgreSQL | Brooklyn, NY',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body data-theme="light">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}