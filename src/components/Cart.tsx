import { useShallow } from 'zustand/react/shallow';
import { CircleX, ShoppingCart, Trash2 } from 'lucide-react';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store/store';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Product } from '@/types/product';
import ChangeQtyButtons from '@/components/ChangeQtyButtons';

const Cart = () => {
  const { reset, products, removeProduct, total } = useStore(
    useShallow(state => ({
      reset: state.reset,
      products: state.products,
      removeProduct: state.removeProduct,
      total: state.total,
    }))
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" size="icon">
          <ShoppingCart />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="overflow-y-scroll space-y-2 w-96">
        <div className="flex gap-2 text-lg items-center">
          <h1>Cart:</h1>
          <Button onClick={reset} variant="destructive" size="icon">
            <CircleX />
          </Button>
        </div>
        <div className="space-y-2">
          {products.map((product: Product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-2">
                <CardTitle>{product.title}</CardTitle>
                <Button onClick={() => removeProduct(product.id)} variant="destructive" size="icon">
                  <Trash2 />
                </Button>
              </CardHeader>
              <CardContent>${product.price}</CardContent>
              <CardFooter>
                <ChangeQtyButtons productId={product.id} />
              </CardFooter>
            </Card>
          ))}
        </div>
        <p>Total: ${total}</p>
      </PopoverContent>
    </Popover>
  );
};

export default Cart;
