import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function RootLayout() {
  return (
    <AppShell header={{ height: 80 }}>
      <Header />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <Footer />
    </AppShell>
  );
}
