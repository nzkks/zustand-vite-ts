import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';

import { Store } from '@/types/store';
import { createUserSlice } from '@/store/user-slice';
import { createCartSlice } from '@/store/cart-slice';

export const useStore = create<Store>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...createUserSlice(...a),
          ...createCartSlice(...a),
        }))
      ),
      {
        name: 'store1', // any name to keep the whole store in the browser local storage
      }
    )
  )
);
