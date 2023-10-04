import {useState} from 'react'

const CheckoutForm = ({ onConfirm}) => {

  const [name,setName] = useState ('')
  const [phone, setPhone] = useState ('')
  const [email, setEmail] = useState ('')
  
  const handleOnSubmit = (e) => {
    e.preventDefault ()
  
    const userData = {
      name, phone, email
    }

    onConfirm (userData)
  }




  return (
  <form  onSubmit={handleOnSubmit}> 
  <div> 
      <label> Name</label>
      <input type='text' value= {name} onChange={({target}) => setName(target.value)} placeholder='name' /> 
  </div>
  <div> 
      <label> Phone</label>
      <input type='text' value= {phone} onChange={({target}) => setPhone(target.value)} placeholder='phone'/> 
  </div>
  <div> 
      <label> Email </label>
      <input type='text' value= {email} onChange={({target}) => setEmail (target.value)} placeholder='email'/> 
  </div>
  <button  type='submit'>
  
  </button>
  </form>
)
}




/* const CheckoutForm = ({ onConfirm, loading, email = ' '}) => {

    const [form, setForm] = useState ({
        name: ' ',
        phone: ' ',
        email: ' ',
    })
  
  const handleOnChange = (Event) => {
    const { name, value} = Event.Target
    setForm (prev => ({
        ...prev,
        [name]:value
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault ()
    onConfirm (form)
  }
  
  
    return (
    <form  onSubmit={handleOnSubmit}> 
    <div> 
        <label> Name</label>
        <input type='text' name='name' value={form.name} onChange={handleOnChange} placeholder='name' /> 
    </div>
    <div> 
        <label> Phone</label>
        <input type='text' name='phone' value={form.phone} onChange={handleOnChange} placeholder='phone'/> 
    </div>
    <div> 
        <label> Email </label>
        <input type='text' name='email' value={form.email} onChange={handleOnChange} placeholder='email'/> 
    </div>
    <button  disabled={loading}>
    {loading ? 'Cargando ...' : 'Checkout'}
    </button>
    </form>
  )
}
 */




export default CheckoutForm