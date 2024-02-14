import { PopularProductCard } from "../components"
import { products } from "../constants"
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin w-full font-bold leading-[68px]">Our <span className="text-coral-red">Popular</span> Procucts </h2>
        <p className="max-w-lg font-montserrat text-slage-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 frid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts