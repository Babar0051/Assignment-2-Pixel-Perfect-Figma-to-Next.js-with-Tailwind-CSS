import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-[59px] py-[16px] bg-[#1C223A] text-white ">
      {/* Brand Name */}
      <div className="flex items-center text-white font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] ml-[140px]"> 
        <Link href="/">
          <span className="text-[24px] font-bold leading-[32px] tracking-[0.1px] text-left bg-[#1C223A] w-[152px] h-[32px] block">
            BrandName
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-[30px] font-montserrat text-[16px] font-medium -ml-[230px]" style={{ width: "275px", height: "24px" }}>
        <Link href="/" className="text-white font-medium hover:text-gray-300">Home</Link>
        <Link href="/product" className="text-white font-medium hover:text-gray-300">Product</Link>
        <Link href="/pricing" className="text-white font-medium hover:text-gray-300">Pricing</Link>
        <Link href="/contact" className="text-white font-medium hover:text-gray-300">Contact</Link>
      </div>

      {/* Auth Links */}
      <div className="flex items-center space-x-9 font-montserrat">
        <Link href="/login" className="text-white font-medium hover:text-gray-300">Login</Link>
        <Link href="/signup" className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600" style={{ marginRight: '130px' }}>JOIN US</Link>
      </div>
    </nav>
  );
}
