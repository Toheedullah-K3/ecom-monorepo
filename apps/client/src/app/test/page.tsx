import { auth } from '@clerk/nextjs/server'
import React from 'react'

const Test = async () => {
    const { getToken } = await auth()
    const token = await getToken()
    
    // --- Product -- 
    const resProduct = await fetch("http://localhost:8000/test", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const dataProduct = await resProduct.json()
    console.log(dataProduct)

    // --- Order -- 
    const resOrder = await fetch("http://localhost:8001/test", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const dataOrder = await resOrder.json()
    console.log(dataOrder)

        // --- Payment -- 
    const resPayment = await fetch("http://localhost:8002/test", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const dataPayment = await resPayment.json()
    console.log(dataPayment)

  return (
    <div>Test</div>
  )
}

export default Test