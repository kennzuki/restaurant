
import { Button } from "@/components/ui/button"


export default function Hero() {
  return (
    
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Kenki Haven
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Experience culinary excellence in the heart of the city. Our chef-crafted menu brings you the finest flavors from around the world.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Book a Table</Button>
                <Button variant="outline" className="bg-green-500 text-white">View Menu</Button>
              </div>
            </div>
         
  )
}