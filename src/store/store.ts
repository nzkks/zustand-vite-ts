import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { Store } from '@/types/store';
import { createUserSlice } from '@/store/user-slice';

export const useStore = create<Store>()(
  immer((...a) => ({
    ...createUserSlice(...a),
  }))
);
