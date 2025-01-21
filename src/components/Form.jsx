import React from 'react'
import './formc.css'

function Form() {
    
    const [formData,setFormData]=React.useState(
        {name:"", email:""}
    )
    console.log(formData)
    function handleEvents(event){
        const {name,value}=event.target
        setFormData((p)=>({
            ...p,
            [name]:value
        }))
    }
    
  return (
    <div className='container'>
    <form>
        <div className='inputs'>
        <label>User name</label>
        <input 
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleEvents}
        />
        </div>
        <div className='inputs'>
        <label>User Email</label>
        <input 
            type="email"
            placeholder="Enter your Email Id"
            name="email"
            value={formData.email}
            onChange={handleEvents}
        />
        </div>
    </form>
</div>
  )
}

export default Form