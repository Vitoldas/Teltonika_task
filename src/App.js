import { HomePage } from './components/organisms/HomePage/HomePage';
import { CategoryPage } from './components/organisms/category-page/CategoryPage';
import ErrorPage from './components/organisms/errorPage/ErrorPage';
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
