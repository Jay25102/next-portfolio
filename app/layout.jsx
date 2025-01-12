import "@styles/globals.css";

import Header from "@components/header";
import Footer from "@components/footer";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Wallpaper Aisle",
  description: "Browse and upload desktop images"
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