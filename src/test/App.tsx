import HeavyButton from './components/HeavyButton';
import useCounter from './hooks/useCounter';

export default function App() {
  const { count, increment } = useCounter();
  return (
    <>
      <HeavyButton onClick={increment} />
      <p>{count}</p>
    </>
  );
}
