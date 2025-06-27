import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "@app/app.scss"
import HomePage from '@pages/home/HomePage';
import AuthPage from '@pages/auth/AuthPage';
import ErrorPage from '@pages/error/ErrorPage';

// pages
  

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/authorization' element={<AuthPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App;