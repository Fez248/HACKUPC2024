import { Fira_Code as FontMono, Lato as FontSans, Work_Sans as FontTitle} from "next/font/google"


export const fontTitle = FontTitle({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export const fontSans = FontSans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
