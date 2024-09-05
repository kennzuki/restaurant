import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";


export default function Featured() {
  return (
  
        <section id='menu'  className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Dishes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
                <CardContent className="p-4">
                  <Image
                    alt="Truffle Risotto"
                    className="w-full h-48 object-cover rounded-md mb-4"
                    height="200"
                    src="/pexels-marios-gkortsilas-284432004-13983276.jpg?height=200&width=300"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <h3 className="text-xl font-bold mb-2">Truffle Risotto</h3>
                  <p className="text-gray-600">Creamy Arborio rice with black truffle shavings</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    alt="Truffle Risotto"
                    className="w-full h-48 object-cover rounded-md mb-4"
                    height="200"
                    src="/burger.jpg?height=200&width=300"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <h3 className="text-xl font-bold mb-2">Truffle Risotto</h3>
                  <p className="text-gray-600">Creamy Arborio rice with black truffle shavings</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    alt="Chocolate Lava Cake"
                    className="w-full h-48 object-cover rounded-md mb-4"
                    height="200"
                    src="/pexels-ella-olsson-572949-1640772.jpg?height=200&width=300"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <h3 className="text-xl font-bold mb-2">Chocolate Lava Cake</h3>
                  <p className="text-gray-600">Decadent chocolate cake with a molten center</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    alt="Chocolate Lava Cake"
                    className="w-full h-48 object-cover rounded-md mb-4"
                    height="200"
                    src="/pexels-lum3n-44775-1410235.jpg?height=200&width=300"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <h3 className="text-xl font-bold mb-2">Chocolate Lava Cake</h3>
                  <p className="text-gray-600">Decadent chocolate cake with a molten center</p>
                </CardContent>
              </Card>
            </div>
          </div>
    </section>


  )
}