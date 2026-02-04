// export default function Footer() {
//   return (
//     <footer className="bg-black text-white py-16 px-6">
//       <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
//         {/* Brand */}
//         <div>
//           <h3 className="text-2xl font-semibold">PrimeCut</h3>
//           <p className="mt-4 text-gray-400 max-w-sm">
//             Premium grooming studio focused on precision, style, and confidence.
//           </p>
//         </div>

//         {/* Links */}
//         <div>
//           <h4 className="font-medium">Explore</h4>
//           <ul className="mt-4 space-y-2 text-gray-400">
//             <li>
//               <a href="#services" className="hover:text-white transition">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#gallery" className="hover:text-white transition">
//                 Gallery
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="hover:text-white transition">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Info */}
//         <div>
//           <h4 className="font-medium">Visit</h4>
//           <p className="mt-4 text-gray-400">
//             Mon–Sat: 9am – 7pm
//             <br />
//             Downtown Studio
//             <br />
//             Phone: (000) 123-4567
//           </p>
//         </div>
//       </div>

//       <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} PrimeCut Studio. All rights reserved.
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      {/* <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3 text-center md:text-left"> */}

      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3 place-items-start md:place-items-center text-center md:text-left">
        {/* Brand */}
        <div className="mx-auto md:mx-0">
          <h3 className="text-2xl font-semibold">PrimeCut</h3>
          <p className="mt-4 text-gray-400 max-w-sm mx-auto md:mx-0">
            Premium grooming studio focused on precision, style, and confidence.
          </p>
        </div>

        {/* Explore — ALWAYS one line */}
        <div className="mx-auto md:mx-0">
          <h4 className="font-medium">Explore</h4>
          <ul className="mt-4 flex justify-center md:justify-start gap-6 text-gray-400">
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-white transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Visit — ALWAYS stacked */}
        <div className="mx-auto md:mx-0">
          <h4 className="font-medium">Visit</h4>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Mon–Sat: 9am – 7pm
            <br />
            Downtown Studio
            <br />
            Phone: (000) 123-4567
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PrimeCut Studio. All rights reserved.
      </div>
    </footer>
  );
}
