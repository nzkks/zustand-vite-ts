import { PRODUCTS_DATA } from '@/lib/mockData';

const App = () => {
  return (
    <main className="space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2">
      <h1 className="text-2xl">Products:</h1>
      <div className="space-y-2">
        {PRODUCTS_DATA.map(product => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </main>
  );
};

export default App;
