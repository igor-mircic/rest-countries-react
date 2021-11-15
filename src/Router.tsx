import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Details } from './pages/Details'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":countryId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}
