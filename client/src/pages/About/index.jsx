
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/Footer";


import React from 'react'

export default function About() {
  return (
    <>
    <Header />
    

    <section className="container backdrop-blur-lg p-7 bg-opacity-40 max-w-430 !mx-auto !rounded-lg !my-12">
      <div className="container !mx-auto px-5 bg-clip-padding !py-17">
        <div className="text-center !mb-1">
            
          <h1 className="text-4xl font-bold text-white">About us</h1>
          <br />
          <p className="!mt-5 text-lg text-white justify-center max-w-450 center">
          We are your reliable partner for quality watches. We offer a wide selection of 
          elegant and modern timepieces for every occasion.
          </p>
          
        </div>


        <div className="flex flex-col items-center justify-center !space-y-30 !mt-29">
          
        <div className="text-4xl font-bold text-white !mr-270 !mt-22"> 
            <h2 className="text-5xl">Who are we?</h2>
            </div>


          <div className="max-w-4xl !px-2 !ml-110 !-mt-62">
            
            <p className="text-lg text-white !mt-9">
            Our passion for watches led us to create this online platform where you can find the best pieces from renowned brands. 
            Our goal is to offer you not only beautiful designs but also top-notch quality and functionality. 
            Our vision is for everyone who visits our online store to find the perfect watch that matches their personality.
            </p>
            <p className="text-lg text-white mt-4">
            We believe in a personalized approach, and that's why we strive to offer each customer the best shopping experience, 
            whether you're looking for a watch for yourself or as a gift for your loved ones.
            </p>
          </div>
          
          <div className="relative max-w-3xl w-full !mt-18">
            <img
              src="https://blog.crownandcaliber.com/wp-content/uploads/2015/03/CC-x-GQ-6355.jpg"
              alt="Hodinky"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <span className="text-4xl font-semibold text-white">
                Your time starts here.
              </span>
            </div>
          </div>
        </div>
        
        

        
        <div className="!mt-57 text-center !mb-20">
          <h2 className="text-5xl font-semibold text-white">Why choose us?</h2>
          <div className="!mt-38 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </div>
              
             
              <div className="!mr-1 ">
                <h3 className="text-2xl font-semibold text-white">Quality watches</h3>
                <p className="text-white ">
                Our watches are carefully selected and tested for their longevity and precision.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-500 text-white p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v12l7-4 7 4V3"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Free shipping</h3>
                <p className="text-white">
                We offer free shipping on orders over a certain amount.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 text-white p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Fast and Easy Exchange</h3>
                <p className="text-white">
                If you're not satisfied with the watches, we offer an easy exchange or return policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>

    <Footer />
    </>
  )
}
