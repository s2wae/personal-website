import 'styles/globals.css';
import Cats from 'components/cats/cats';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"/>
      </head>
      <body >
        <div className="background">
          <Cats />
          {children}
        </div>
      </body>
    </html>
  )
}
