import { Hero } from './components/patterns/Hero'
import { Navbar } from './components/patterns/Navbar'
import { Frame } from './components/signature/Frame'

export default function App() {
  return (
    <Frame>
      <Navbar />
      <Hero />
    </Frame>
  )
}
