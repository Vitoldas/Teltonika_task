import { HomePage } from './components/container/HomePage';
import { CategoryPage } from './components/category-page/CategoryPage';
import ErrorPage from './components/errorPage/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Create-Category" element={<CategoryPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
