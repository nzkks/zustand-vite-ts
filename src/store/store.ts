import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { Store } from '@/types/store';
import { createUserSlice } from '@/store/user-slice';
import { createCartSlice } from '@/store/cart-slice';

export const useStore = create<Store>()(
  devtools(
    immer((...a) => ({
      ...createUserSlice(...a),
      ...createCartSlice(...a),
    }))
  )
);
