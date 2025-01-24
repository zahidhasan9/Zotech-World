import Navbarmain from '@/components/Navbar/navbarmain';
import './globals.css';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
      >
    
        <Navbarmain />
        {children}
        <Footer />
      </body>
    </html>
  );
}
