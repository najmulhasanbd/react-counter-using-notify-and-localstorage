
import { useEffect, useState } from 'react'
import './App.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  
  const getInitialCount = () => {
    const savedCount = localStorage.getItem("count")
    return savedCount ? parseInt(savedCount) : 0
  }
  const [count, setCount] = useState(getInitialCount)


  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])

  const notify = (msg) => toast(msg);

  const handleIncrement = () => {
    setCount(count + 1)
    notify(" Incremented!");
  }
  const handleDecrement = () => {
    if (count <= 0) {
      notify(" Count Already zoro!");
      return '0 ';
    } else {
      setCount(count - 1)
      notify(" Decremented!");
    }
  }
  const handleReset = () => {
    setCount(0)
    notify(" Reset!");
  }

  return (
    <>
      <h2 className='font-bold text-5xl mb-4'>{count}</h2>
      <div className='flex justify-center gap-4 '>
        <button onClick={handleIncrement} className="border transition-all duration-300 ease-in-out cursor-pointer py-2 font-semibold hover:bg-amber-400 hover:text-white  px-4 rounded-xl border-amber-400">
          Increment
        </button>
        <button onClick={handleDecrement} className='transition-all duration-300 cursor-pointer hover:bg-black hover:text-white font-semibold border py-2 px-4 rounded-xl'>Decrement</button>
        <button onClick={handleReset} className='border border-b-cyan-600 px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:bg-cyan-600 hover:text-white cursor-pointer'>Reset</button>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App
