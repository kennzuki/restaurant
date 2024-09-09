import React from 'react'
import Link from "next/link"

const About = () => {
  return (
      <div className="container px-4 md:px-6 flex flex-col gap-8 items-center">
          <h1 className="text-5xl sm:text-2xl font-bold">About Gourmet Haven</h1>
          <p className="text-center text-xl">Gourmet Haven is more than just a restaurant;A culinary journey. Our passionate team of chefs combines traditional techniques with innovative flavors to create unforgettable dining experiences. We source only the finest, freshest ingredients to ensure every dish is a masterpiece.</p>
          <section className="uppercase flex gap-12 place-items-center font-semibold">
              <Link href='#' className='bg-black px-6 py-2 border text-white rounded-xl'>our story</Link>
              <Link href='# 'className='px-6 py-2 border rounded-xl'>meet our staff</Link>
          </section>

    </div>
  )
}

export default About