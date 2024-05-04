import { Fira_Code as FontMono, Lato as FontSans} from "next/font/google"



export const fontSans = FontSans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
