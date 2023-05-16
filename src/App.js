import Header from './component/header/Header';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div id='detail'>
        <Outlet />
      </div>
    </div>
  );
}
export default App;
