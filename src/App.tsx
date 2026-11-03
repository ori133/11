import { HeroAgency } from './components/patterns/HeroAgency'
import { Navbar } from './components/patterns/Navbar'
import { Frame } from './components/signature/Frame'

export default function App() {
  return (
    <Frame>
      <Navbar
        brand="Brightside"
        links={['Work', 'Services', 'Process', 'Journal', 'About']}
        cta="Get in touch"
      />
      <HeroAgency />
    </Frame>
  )
}
