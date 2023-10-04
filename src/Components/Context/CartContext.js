import { createContext, useState, useEffect} from "react"
import { Storage } from "../../utils/storage";


export const CartContext = createContext()

/* ({
    cart: [],
    total: 0,
    totalQuantity: 0,
}) */

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState( () => Storage.get( "cart") || []);

    // creo los estados para modificar el estado total de productos y total precio
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    //de forma provisoria reviso por consola
    console.log(cart)

    useEffect(() => {   
        Storage.add('cart', cart)
      }, [cart])


    //la funcion para agregar los items al carrito
    const addItem = (item, quantity) => {


        const isInCart = cart.find((prod) => prod.item && prod.item.id === item.id);

        if (item && item.id && item.price && quantity > 0) {
            if (!isInCart) {
                setCart((prevCart) => [...prevCart, { item, quantity }]); // Aquí cambiamos la estructura del objeto que se agrega
                setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
                setTotal((prevTotal) => prevTotal + item.price * quantity);
            } else {
                const cartUpdated = cart.map((prod) => {
                    if (prod.item && prod.item.id === item.id) {
                        return { ...prod, quantity: prod.quantity + quantity };
                    } else {
                        return prod;
                    }
                });

                setCart(cartUpdated);
                setTotal((prevTotal) => prevTotal + item.price * quantity);
                setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
            }
        } else {
            console.error("El producto no recibe 'item' como propiedad o no tiene una propiedad 'id' válida");
        }
    };



    const removeItem = (id) => {
        const productRemoved = cart.find((prod) => prod.item && prod.item.id === id);

        if (productRemoved) {
            const cartUpdated = cart.filter((prod) => prod.item && prod.item.id !== id);
            setCart(cartUpdated);
            setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - productRemoved.quantity);
            setTotal((prevTotal) => prevTotal - (productRemoved.item.price * productRemoved.quantity));
        }
    };


    const clearCart = () => {
        setCart([]);
        setTotal(0);
        setTotalQuantity(0);
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, total, totalQuantity, clearCart }}>
            {children}
        </CartContext.Provider>

    )


}



          //pruebo errores en la logica de addItem
/* const isInCart = (itemId) => {
    return cart.some(prod => prod.item.id === itemId)
} */

/*  const isInCart = cart.find (prod => prod.item.id === item.id);
 
 
 
 if (item && item.id && item.price && quantity > 0) {

 if (!isInCart) {
     setCart(prev => [...prev, { ...item, quantity}])
     setTotalQuantity (prev => prev + quantity);
     setTotal (prev => prev + (item.price * quantity));

 } else {
     const cartUpdated = cart.map ((prod) => {
         if (prod.item.id === item.id) {
             return { ...prod, quantity:prod.quantity + quantity};
         } else {
             return prod;
         }
     });

     setCart(cartUpdated);
     setTotal(prev => prev + (item.price * quantity))
     setTotalQuantity (prev => prev + quantity);
 }
}else {
 console.error ("el producto no recibe item como propiedad")
}

} */


/* const removeItem = (id) => {
    const productRemoved = cart.find (prod => prod.item.id === id);
    const cartUpdated = cart.filter(prod => prod.item.id !== id)
    setCart(cartUpdated);
    setTotalQuantity (prev => prev - productRemoved.quantity);
    setTotal (prev => prev - (productRemoved.item.price*productRemoved.quantity));
}
*/


/*  const addItem = (item, quantity) => {

     if (!isInCart(item.id)) {
         setCart(prev => [...prev, { ...item, quantity }])
     } else {
         console.error("el producto ya fue agregado")
     }
 }

 const removeItem = (itemId) => {
     const cartUpdated = cart.filter(prod => prod.id !== itemId)
     setCart(cartUpdated)
 }

 const clearCart = () => {
     setCart([])
 }

 const isInCart = (itemId) => {
     return cart.some(prod => prod.id === itemId)
 } */



