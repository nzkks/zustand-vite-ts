import { useShallow } from 'zustand/react/shallow';
import { useStore } from './store/store';

function App() {
  // one way of using the store
  // const fullName = useStore(state => state.fullName);
  // const age = useStore(state => state.age);

  // better way of using the store
  // const { age, fullName } = useStore(state => ({
  //   age: state.age,
  //   fullName: state.fullName,
  // }));

  // A performant way of using the store
  const { age, fullName } = useStore(
    useShallow(state => ({
      age: state.age,
      fullName: state.fullName,
    }))
  );

  if (!age || !fullName) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>{fullName}</div>
      <div>{age}</div>
    </>
  );
}

export default App;
