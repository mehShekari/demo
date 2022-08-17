import { useContext, createContext, ReactNode, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalSorage";
import ResponsiveDrawer from "../components/sideBar/SideBar";
import Data from "../data/items.json";

type ShoppingCartProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  totalQuantity: () => number
  OpenCard: () => void
  CloseCard: () => void
  totalPrice: (store: CartItem[]) => number
  store: CartItem[]
}

const ShoppingCotnext = createContext({} as ShoppingCartContext);

export function useShoppingContext() {
  return useContext(ShoppingCotnext);
}

export default function ShppingProvider({ children }: ShoppingCartProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [store, setStore] = useLocalStorage<CartItem[]>("store-storage", []);

  const OpenCard = () => setIsOpen(true);

  const CloseCard = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return store.find(item => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    if (store.find(item => item.id === id) == null) {
      setStore(prev => {
        return [...prev, { id, quantity: 1 }]
      })
    } else {
      const fakeStore = [...store];
      let i = store.findIndex(item => item.id === id);
      fakeStore[i].quantity += 1;
      setStore(fakeStore);
    }
  }

  function decreaseCartQuantity(id: number) {
    if (store.find(item => item.id === id)?.quantity === 1) {
      setStore(store.filter(item => item.id !== id))
    } else {
      const fakeStore = [...store];
      let i = store.findIndex(item => item.id === id);
      fakeStore[i].quantity -= 1;
      setStore(fakeStore);
    }
  }

  function removeFromCart(id: number) {
    setStore(store.filter(item => item.id !== id))
  }

  function totalQuantity() {
    return store.reduce((total, curr) => {
      let count = total + curr.quantity
      return count
    }, 0)
  }

  function totalPrice(store: CartItem[]) {
    let total: any = [];
    store.forEach(item => {
      return Data.forEach(i => {
        if (i.id === item.id) {
          return total.push({...i, quantity: item.quantity})
        }
      })
    })

    return total.reduce((total: number, curr: any) => {
      let all = total + curr.price * curr.quantity
      return all 
    }, 0)     
  }

  const value = {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    OpenCard,
    CloseCard,
    totalQuantity,
    totalPrice,
    store
  }

  return (
    <ShoppingCotnext.Provider value={value}>
      {children}
      <ResponsiveDrawer isOpen={isOpen} />
    </ShoppingCotnext.Provider>
  )
}