import { useShallow } from 'zustand/react/shallow';
import { Minus, Plus } from 'lucide-react';

import { Button } from './ui/button';
import { useStore } from '@/store/store';

type Props = {
  productId: string;
};

const ChangeQtyButtons = ({ productId }: Props) => {
  const { getProductById, incQty, decQty } = useStore(
    useShallow(state => ({
      getProductById: state.getProductById,
      incQty: state.incQty,
      decQty: state.decQty,
      setTotal: state.setTotal,
    }))
  );

  const product = getProductById(productId);

  return (
    <>
      {product && (
        <div className="flex gap-2 items-center">
          <Button onClick={() => decQty(product.id)} size="icon">
            <Minus />
          </Button>
          <p>{product.qty}</p>
          <Button onClick={() => incQty(product.id)} size="icon">
            <Plus />
          </Button>
        </div>
      )}
    </>
  );
};

export default ChangeQtyButtons;
