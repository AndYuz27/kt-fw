import './App.css';
import Header from './Header';
import {
  Routes,
  Route
} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
function App() {
  return (
    <div className="App">
    <Header/>
      <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />

      </Routes>
</main>
    </div>
  );
}

export default App;
