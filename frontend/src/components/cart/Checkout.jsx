import React from 'react'

const Checkout = () => {
    const notify = () => toast("Wow so easy!");
  return (
    <button onClick={notify}>Notify!</button>

  )
}

export default Checkout