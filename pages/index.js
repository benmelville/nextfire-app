import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import toast from 'react-hot-toast';

import Loader from '../components/Loader';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// each page file will have one default export and that is the component that Next will
// render when that route is triggered in the browser.
export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success('hello toast')}>
        toast me
      </button>
      <Loader show />
    </div>
  );
}
