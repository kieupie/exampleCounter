import { useMemo, useState } from 'react';
import { PlusOutlined, MinusOutlined, ReloadOutlined } from '@ant-design/icons';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  //expensive function - Fibonacci
  function fibonacci(n: number): number {
    if (n < 2) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  //No use memoization
  // console.time('start fibonacci')
  // const resultFibonacci = fibonacci(45);
  // console.timeEnd('end time fibonacci')

  //Use useMemo
  console.time('start time fibonacci')
  const resultFibonacci = useMemo(() => {
    return fibonacci(45);
  }, []);
  console.timeEnd('end time fibonacci')


  return (
    <div className="relative w-80vmin bg-blue-900 p-24 rounded-lg shadow-lg">
      <h1 className="text-white text-center font-mono text-6xl">{count}</h1>
      <div className="flex justify-around mt-20">
        <button className="inline-flex items-center justify-center w-24 h-12 bg-white rounded focus:outline-none hover:bg-gray-300" onClick={decrement}>
          <MinusOutlined className="text-2xl flex items-center justify-center text-gray-800" />
        </button>

        <button className="inline-flex items-center justify-center w-12 h-12 rounded focus:outline-none hover:bg-gray-300" onClick={reset}>
          <ReloadOutlined className="text-2xl flex items-center justify-center text-white" />
        </button>

        <button className="inline-flex items-center justify-center w-24 h-12 bg-white rounded focus:outline-none hover:bg-gray-300" onClick={increment}>
          <PlusOutlined className="text-2xl flex items-center justify-center text-gray-800" />
        </button>

      </div>
      <h1 className="text-white text-center font-mono text-sm my-[15px]">Fibonacci result: {resultFibonacci}</h1>
    </div>

  );
}

export default App;