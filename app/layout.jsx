

import Navigation from '../app/components/Navigation.jsx';
import Footer from '../app/components/Footer.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { ThemeProvider } from '../app/components/ThemeContext.jsx';
import './styles/App.scss';
import ChatWidget from '../app//components/Chat';


export const viewport = {
  themeColor: '#000000',
};

export const metadata = {
  title: 'Connor D Wotkowicz',
  description:
    'Portfolio of Connor D. Wotkowicz — full-stack developer & creative technologist.',
  manifest: '/site.webmanifest',
  // themeColor: '#000000',

  icons: {
   
    shortcut: '/favicon.ico',

 
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],

  
    apple: '/apple-touch-icon.png'
  },


  other: {
    'msapplication-TileColor' : '#000000',
    'msapplication-TileImage' : '/mstile-144x144.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
     <body data-theme="dark">

          <ToastContainer />
          <Navigation />
          <main>{children}</main>
                {/* <ChatWidget /> */}
          <Footer />

      </body>
    </html>
  );
}