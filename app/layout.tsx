import type { Metadata } from 'next';
import { Barlow, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
const barlow=Barlow({variable:'--font-barlow',subsets:['latin'],weight:['400','500','600','700']});
const plex=IBM_Plex_Mono({variable:'--font-plex',subsets:['latin'],weight:['400','500','600']});
export const metadata:Metadata={title:'Práctica de Antropometría Ergonómica',description:'Tres ejercicios de diseño ergonómico para los percentiles 5.º al 95.º.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body className={`${barlow.variable} ${plex.variable}`}>{children}</body></html>}
