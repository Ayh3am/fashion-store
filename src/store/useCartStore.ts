import { create } from 'zustand';

type CartItem = {
  id: string;
  name: string;
  price: string;
  size: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => {
    const existingItem = state.items.find(
      (i) => i.id === item.id && i.size === item.size
    );
    if (existingItem) {
      return {
        items: state.items.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };
    }
    return { items: [...state.items, item] };
  }),
  removeItem: (id, size) => set((state) => ({
    items: state.items.filter((i) => !(i.id === id && i.size === size))
  })),
}));
