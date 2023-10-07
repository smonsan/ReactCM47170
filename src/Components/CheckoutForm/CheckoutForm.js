import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const userData = {
      name, phone, email
    }

    onConfirm(userData)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label> Name</label>
        <input type='text' value={name} onChange={({ target }) => setName(target.value)} placeholder='name' />
      </div>
      <div>
        <label> Phone</label>
        <input type='text' value={phone} onChange={({ target }) => setPhone(target.value)} placeholder='phone' />
      </div>
      <div>
        <label> Email </label>
        <input type='text' value={email} onChange={({ target }) => setEmail(target.value)} placeholder='email' />
      </div>
      <div>
        <button type='submit'>
          Crear Orden
        </button>
      </div>
    </form>
  )
}



export default CheckoutForm