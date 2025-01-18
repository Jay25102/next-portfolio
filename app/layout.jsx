import "@styles/globals.css";

import Header from "@components/header";
import Footer from "@components/footer";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Jason Chen Portfolio",
  description: "Portfolio of a passionate Web Designer, Programmer, and Software Engineer"
}

const montserrat = Montserrat({
  subsets: ['latin']
})

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        {/* header component */}
        <Header />

        <main>
          {children}
        </main>

        {/* footer */}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;