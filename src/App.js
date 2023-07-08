import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import List from './pages/list';
import Todo from './pages/todo'
  
function App() {
  return (
    <BrowserRouter>
      <div className='wrapper font-sans'>
          <Routes>
            <Route path='/' exact element={<List/>} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
