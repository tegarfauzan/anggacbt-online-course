import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ManageCourse from './pages/ManageCourse'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManageCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
