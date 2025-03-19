import React from 'react'

const Footer = () => {
  return (
    <footer className="!px-30 md:px-16 lg:px-28 !py-11 !mb-0 backdrop-blur-lg bg-opacity-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold !mb-4 !mx-51">
            WatchTime
          </h2>
          <p className="text-white">
            We try our best to provide the best products and services to our customers.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold !mb-4 text-center">Useful links</h2>
            <ul>
              <li><a href="/home" className="text-white hover:underline !mx-60 ">Home</a></li>
              <li><a href="/contact" className="text-white hover:underline !mx-60 ">Contact</a></li>
              <li><a href="/about" className="text-white hover:underline !mx-60 " >About</a></li>
            </ul>
        </div>
        <div>
        <h2 className="text-lg font-bold !mb-4 !mx-50">Find us</h2>
        <ul className="flex space-x-4">
          <li> 
            
            <a href="" className="text-white hover:underline ">Facebook</a></li>


              <li>
                
                <a href="" className="text-white hover:underline !mx-31">Twitter</a></li>


              <li>
                
                <a href="" className="text-white hover:underline">Instagram</a></li>
            </ul>
        </div>
      </div>
      <div className="pt-6 text-white text-center !mt-19">
        <p>© 2025 WatchTime. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer