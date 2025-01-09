import "@styles/globals.css";

import { Montserrat } from "next/font/google";

export const metadata = {
    title: "Wallpaper Aisle",
    description: "Browse and upload desktop images"
}

const montserrat = Montserrat({
  subsets: ['latin']
})

const RootLayout = ({children}) => {
  return (
    <html lang="en" className={montserrat.className}>
        <body>
          {/*  className="app bg-light-blue-cust" */}
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;