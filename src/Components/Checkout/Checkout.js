
import { addDoc, documentId,collection, getDocs, query, Timestamp, where, writeBatch } from 'firebase/firestore'
import { useState, useContext } from 'react'
import { db } from '../../firebaseConfig/config'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../Context/CartContext'

const Checkout = () => {

    const[user, setUser] = useState ({})
    const [orderId, setOrderId] = useState ('')
    const {cart,total,clearCart } =useContext(CartContext)
    
    const datosComprador = (e) => {

        setUser ({
            ...user,
            [e.target.name]: e.target.value

        })
    }

    const finalizarCompra= (e) =>{
        e.preventDefault()

        if (!user.name && !user.phone){
            alert ('completa los campos')
        } else{
                let order = {

                    user,
                    item:cart,
                    total: total,
                    date: Timestamp.fromDate(new Date())
                }



            const ventas =collection (db, 'orders')
            addDoc (ventas,order)
            .then ((res) => {
                setOrderId(res.id)
                clearCart ()
            })
            .catch ((error) => console.log (error))
            
        }
    }
    return (
       <div>
        { orderId !== ''
        ? <div>
        <h2> Felicitaciones su compra fue realizada!</h2>
        <h4> El ID de su compra es: {orderId} </h4>
        </div>
    
    : <div>
        <form onSubmit={finalizarCompra}> 
        <div> 
            <label> Name</label>
            <input type='text'  onChange= {datosComprador}  placeholder='name' name='name' /> 
        </div>
        <div> 
            <label> Phone</label>
            <input type='text'  onChange= {datosComprador}  placeholder='phone' name='phone'/> 
        </div>
        <div> 
            <label> Email </label>
            <input type='text'  onChange= {datosComprador}  placeholder='email' name='email'/> 
        </div>
        <div>
        <button  type='submit' className='btn'>
        Crear Orden
        </button>
        </div>
        </form>
        </div>}
      </div> 
      )

    }


export default Checkout

   /*  const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef(where(documentId(), 'in', ids))))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
            const stockDb = dataDoc.stock
            //const stockDb = dataDoc.stockDb

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart?.quantity
            // const prodQuantity = productAddedToCart?.prodQuantity


            if (stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity })
            } else {
                outOfStock.push ({ id: doc.id, ...dataDoc})
            }
        })

        if(outOfStock.length === 0) {
            await batch.commit ()

            const orderRef =collection (db, 'orders')

            const orderAdded = await addDoc (orderRef, objOrder)

            setOrderId (orderAdded.id)
            clearCart ()
        
        } else {
            console.error ('hay productos que estan fuera de stock')
        }

    } catch (error) {
        console.log (error)

    } finally {
        setLoading (false)
    }


    
    if (loading) {
            return <h1> Se esta generando su orden...</h1>
        }
        if (orderId) {
            return <h1> El id de su orden es: {orderId}</h1>
        }

        return (
            <div>
                <h1> Checkout</h1>
                <CheckoutForm onConfirm={createOrder} />
            </div>
        )

    }

} */

// export default Checkout  