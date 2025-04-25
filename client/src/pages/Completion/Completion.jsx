import React from 'react'
import { Check } from 'lucide-react'


export default function Completion() {
  return (
    <>
    
    <div className="flex items-center justify-center h-screen">
  <div className="flex flex-col items-center gap-y-2">
    <div className="flex items-center gap-x-3">
      <h1 className="text-4xl font-bold text-white">Thank you for your order</h1>
      <Check size={40} className="text-green-600" />
    </div>
    <h2 className="text-xl font-bold text-white">We will try to ship as soon as possible.</h2>
  </div>
</div>

    </>
  )
}
