import './global.css';
import NavBar from './components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en">
  <body>
    <div className='g-zync-300 full'>
      <NavBar/>
    </div>
    {children}
  </body>
</html>
  )
}