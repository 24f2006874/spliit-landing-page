import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PaymentHassles from '../components/PaymentHassles'
import CurrencyConversion from '../components/CurrencyConversion'
import ZeroFees from '../components/ZeroFees'
import MoneyTransfers from '../components/MoneyTransfers'
import SupportModal from '../components/SupportModal'
import Footer from '../components/Footer'
import FeatureCards from '../components/FeatureCards'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>SPLLIT</title>
        <meta
          name="description"
          content="Say goodbye to expensive solo travel — Spllit helps you connect, ride together, and keep more in your pocket."
        />
      </Helmet>
      <main className="min-h-screen bg-white">
        <Header />
        <SupportModal />
        <Hero />
        <PaymentHassles />
        <CurrencyConversion />
        <ZeroFees />
        <MoneyTransfers />
        <FeatureCards />
        <Footer />
      </main>
    </>
  )
}
