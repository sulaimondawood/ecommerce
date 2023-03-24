import Link from "next/link";
import User from "../assets/icon.svg";
import Cart from "../assets/cart.svg";
export default function Nav() {
  return (
    <>
      <section className="bg-m-gray">
        <nav className="w-full px-4 lg:px-12  flex py-4 lg:py-8 items-center justify-between  container">
          <Link href="/">
            <p className="text-2xl lg:text-3xl fonnt-semibold text-gray-500">
              OrderPro.
            </p>
          </Link>
          <div className="flex gap-5 items-center justify-center">
            <div className="flex items-center justify-center gap-3">
              <img src={User.src} alt="" />
              <p className="hidden lg:block text-btn-lg">Account</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img src={Cart.src} alt="" />
              <p className="hidden lg:block text-btn-lg">Shopping</p>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
