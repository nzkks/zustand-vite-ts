import { StateCreator } from 'zustand';

type UserState = {
  userName: string;
  fullName: string;
  age: number;
  address: string;
};

type UserActions = {
  setAddress: (address: string) => void;
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<UserSlice, [['zustand/immer', never]], [], UserSlice> = set => ({
  userName: '',
  fullName: 'Test user',
  age: 30,
  address: '',
  setAddress: address =>
    set(state => {
      state.address = address;
    }),
});
