import type { Metadata } from 'next';
import './globals.css';
import './prototype.css';
export const metadata: Metadata={title:'Stick — Words that stick.',description:'A retention-first vocabulary learning experience.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
