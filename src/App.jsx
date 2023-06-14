import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import FormClima from './components/FormClima';

function App() {
  return (
    <>
    <div className='bg-succes bg-opacity-50 bg-primary text-light text-center p-3'>
      <h1>App Clima</h1>
    </div>
      <FormClima></FormClima>
    </>
  )
}

export default App
