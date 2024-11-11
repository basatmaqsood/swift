import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Features from '@/components/features'
import DriverBenefits from '@/components/driver-benefits'
import AppDownload from '@/components/app-download'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <DriverBenefits />
      <AppDownload />
      <Footer />
    </div>
  )
}