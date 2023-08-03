import Image from 'next/image'
import Navbar from './components/navbar'
import LeftColumn from './components/leftColumn'
import RightColumn from './components/rightColumn'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-row'>

      <LeftColumn/>
      <h1 className='w-6/12 text-black'>Hello</h1>
      <RightColumn/>
      </div>
    </div>
  )
}
