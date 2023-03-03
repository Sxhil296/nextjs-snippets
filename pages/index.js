import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <div>
    <Navbar />
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  </div>
  )
}
