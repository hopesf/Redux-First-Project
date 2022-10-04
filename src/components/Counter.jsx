import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, increaseByValue } from '../redux/counter/counterSlice';

const Counter = () => {
  const [inputValue, setİnputValue] = useState(1);
  const counterValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <span>{counterValue}</span>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>İncrement</button>
      <br />
      <br />
      <input
        type="number"
        min={1}
        value={inputValue}
        onChange={(e) => e.target.value.length > 0 && setİnputValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch(increaseByValue(inputValue))}>İncrease By value</button>
    </div>
  );
};
export default Counter;
