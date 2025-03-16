import 'styles/globals.css';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className="background">
          {children}
        </div>
      </body>
    </html>
  )
}
