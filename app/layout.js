import 'styles/globals.css';
import Cats from 'components/cats/cats';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className="background">
          <Cats />
          {children}
        </div>
      </body>
    </html>
  )
}
