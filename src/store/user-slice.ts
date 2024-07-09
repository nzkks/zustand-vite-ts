// import { create, StateCreator } from 'zustand';
import { StateCreator } from 'zustand';

type UserState = {
  userName: string;
  fullName: string;
  age: number;
  address: string;
};

type UserActions = {
  setAddess: (address: string) => void;
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = set => ({
  userName: '',
  fullName: '',
  age: 0,
  address: '',
  // setAddess: address => set(state => ({ ...state, address: address })),
  // setAddess: address => set(state => ({ ...state, address })), // simple example
  setAddess: address => set(() => ({ address })), // way simpler. Because set function actually merges state. So no need of spread operator for this one level example. If the state has nested object then we need to use spread operator explicitly
});

// Nested example
// const useCountStore = create<{
//   nested: { count: number };
//   inc: () => void;
//   dec: () => void;
// }>(set => ({
//   nested: { count: 0 },
//   inc: () => set(state => ({ ...state.nested, nested: { count: state.nested.count + 1 } })),
//   dec: () => set(state => ({ ...state.nested, nested: { count: state.nested.count - 1 } })),
// }));
