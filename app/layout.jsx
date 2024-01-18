import 'modern-normalize/modern-normalize.css';
import './globals.css'
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"


export const metadata = {
  title: 'НХНЛ - ні хвоста ні луски',
  description: 'НХНЛ - ні хвоста ні луски',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <div className="container">
        <Header/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  )
}
