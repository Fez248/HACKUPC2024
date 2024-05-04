import './global.css';
import NavBar from './components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en">
  <body className='g-zync-300'>
    <NavBar text="HOLA" />
    {children}
  </body>
</html>
  )
}