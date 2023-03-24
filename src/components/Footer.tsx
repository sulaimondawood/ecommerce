import Link from "next/link";

export default function () {
  return (
    <div className="mx-auto max-w-6xl py-32 grid grid-cols-4 gap-10 ">
      <div className="flex flex-col gap-8">
        <Link href="/">
          <p className="text-2xl lg:text-3xl fonnt-semibold text-gray-500">
            OrderPro.
          </p>
        </Link>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-black text-head6 font-semibold pb-2">CATALOG</h1>
        <p className="text-gray-500 ">Necklace</p>
        <p className="text-gray-500 ">Hoodie</p>
        <p className="text-gray-500 ">Jewelry Box</p>
        <p className="text-gray-500 ">T-Shirt</p>
        <p className="text-gray-500 ">Jacket</p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-black text-head6 font-semibold pb-2">ABOUT US</h1>
        <p className="text-gray-500 ">Our Producers</p>
        <p className="text-gray-500 ">Sitemap</p>
        <p className="text-gray-500 ">FAQ</p>
        <p className="text-gray-500 ">About Us</p>
        <p className="text-gray-500 ">Terms & Conditions</p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-black text-head6 font-semibold pb-2">
          CUSTOMER SERVICES
        </h1>
        <p className="text-gray-500 ">Contact Us</p>
        <p className="text-gray-500 ">Track Your Order</p>
        <p className="text-gray-500 ">Product Care & Repair</p>
        <p className="text-gray-500 ">Book an Appointment</p>
        <p className="text-gray-500 ">Shipping & Returns</p>
      </div>
    </div>
  );
}
