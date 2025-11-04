import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="theme">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}