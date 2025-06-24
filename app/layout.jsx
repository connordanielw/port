

import Navigation from '../app/components/Navigation.jsx';
import Footer from '../app/components/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '../app/components/ThemeContext.jsx';
import './styles/App.scss';



export const metadata = {
  title: 'Connor D. Wotkowicz • Portfolio',
  description: 'Full-Stack Developer | React • Node.js • PostgreSQL | Brooklyn, NY',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider>
          <ToastContainer />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}