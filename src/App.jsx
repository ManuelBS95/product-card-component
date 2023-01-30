import { useState, useEffect } from "react"
import IconCart from "/images/icon-cart.svg"

function App() {
	const [windowSize, setWindowSize] = useState(window.innerWidth)

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize(window.innerWidth)
		}

		window.addEventListener("resize", handleWindowResize)

		return () => {
			window.removeEventListener("resize", handleWindowResize)
		}
	})

	console.log(windowSize)

	return (
		<div className="App min-h-screen bg-[#f2ebe3] flex items-center justify-center">
			<div className="w-[370px] md:w-[600px] md:flex md:flex-row bg-white rounded-xl overflow-hidden font-montserrat">
				{windowSize <= 767 ? (
					<img src="images/image-product-mobile.jpg" className="" />
				) : (
					<img
						src="images/image-product-desktop.jpg"
						className="md:w-[300px]"
					/>
				)}
				<div className="px-7">
					<p className="mt-6 mb-3 text-xs uppercase tracking-[7px] text-[#5a5f72]">
						Perfume
					</p>
					<h2 className="my-3 font-fraunces text-4xl">
						Gabrielle Essence Eau De Parfum
					</h2>
					<p className="mb-6 text-[14px] leading-7 tracking-[0.5px] text-[#5a5f72]">
						A floral, solar and voluptuous interpretation composed by Olivier
						Polge, Perfumer-Creator for the House of CHANNEL.
					</p>
					<div className="my-4 flex flew-row items-center">
						<p className="text-3xl font-fraunces text-[#3c8067]">$149.99</p>
						<p className="ml-5 text-sm text-[#5a5f72] line-through">$169.99</p>
					</div>
					<div className="flex items-center cursor-pointer justify-center mb-5 py-3 bg-[#3c8067] hover:bg-[#1c232b] rounded-lg text-white font-bold">
						<img src={IconCart} />
						<label className="text-sm ml-4 pointer-events-none">
							Add to Cart
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
