import { UserLocationWrapper } from '@/wrapper/user-location-wrapper';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import '@scss/style.scss';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Provider from './Provider';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dash-n-Eat',
  description: 'Find Resturants Nearby',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Provider>
          <UserLocationWrapper>
            <Header />
            {children}
            <Footer />
          </UserLocationWrapper>
        </Provider>
      </body>
    </html>
  );
}
