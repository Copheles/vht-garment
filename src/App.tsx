import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { FactoryPage } from './pages/FactoryPage'
import { ProductsPage } from './pages/ProductsPage'
import { ContactPage } from './pages/ContactPage'
import { QualityPage } from './pages/QualityPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="factory" element={<FactoryPage />} />
        <Route path="quality" element={<QualityPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
