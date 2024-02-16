import '@/app/global.css'
import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'

export const metadata = {
    title: 'Next-Lara',
}

export const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                )}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout
