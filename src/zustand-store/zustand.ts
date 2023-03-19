import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { UserModel } from '../types';

type UserStore = {
  user: UserModel | null;
  setUser: (user: UserModel) => void;
  clearUser: () => void;
};

const userStoreCreator = persist<UserStore>(
  (set) => ({
    user: null,
    setUser: (user: UserModel) => set(() => ({ user })),
    clearUser: () => set(() => ({ user: null })),
  }),
  { name: 'user-store' }
);

type ModalStore = {
  modal: boolean;
  setModal: (modal: boolean) => void;
  resetModal: () => void;
};

const modalStoreCreator = persist<ModalStore>(
  (set) => ({
    modal: false,
    setModal: (modal: boolean) => set(() => ({ modal })),
    resetModal: () => set(() => ({ modal: false })),
  }),
  { name: 'modal-store' }
);

export const useModalStore = create(modalStoreCreator);

export const useUserStore = create(userStoreCreator);
