import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CartProvider } from './context/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>
);
