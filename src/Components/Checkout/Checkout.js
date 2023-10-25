import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { useState, useContext } from 'react'
import { db } from '../../firebaseConfig/config'
import { CartContext } from '../Context/CartContext'

const Checkout = () => {

    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)

    const datosComprador = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value

        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()

        if (!user.name && !user.phone) {
            alert('completa los campos')
        } else {
            let order = {

                user,
                item: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }



            const ventas = collection(db, 'orders')
            addDoc(ventas, order)
                .then((res) => {
                    setOrderId(res.id)
                    clearCart()
                })
                .catch((error) => console.log(error))

        }
    }
    return (
        <div className="align-items-center container text-center">
            {orderId !== ''
                ? <div>
                    <h2> Felicitaciones su compra fue realizada!</h2>
                    <h4> El ID de su compra es: {orderId} </h4>
                </div>

                : <div>
                    <form onSubmit={finalizarCompra} className="row g-3">
                        <h4 className="mb-4"> Complete sus Datos </h4>
                        <div className="mb-3">
                            {/* <label> Name</label> */}
                            <input type='text' onChange={datosComprador} placeholder='Nombre' name='name' />
                        </div>
                        <div className="mb-3">
                            {/* <label> Phone</label> */}
                            <input type='text' onChange={datosComprador} placeholder='Telefono' name='phone' />
                        </div>
                        <div className="mb-3">
                            {/* <label> Email </label> */}
                            <input type='text' onChange={datosComprador} placeholder='Email' name='email' />
                        </div>
                        <div className="mb-3">
                            {/* <label> Email </label> */}
                            <input type='text' placeholder='Repita su Email' name='email' onChange={((e) => setValidateEmail(e.target.value))} />
                        </div>
                        <div className="mb-3">
                            <button type='submit' className="btn btn-primary" disabled={validateEmail !== user.email}>
                                Crear Orden
                            </button>
                        </div>
                    </form>
                </div>}
        </div>
    )

}


export default Checkout