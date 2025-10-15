// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { FaLaptopCode } from "react-icons/fa";
// import "./nav.css";

// function Nav() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div className="container">
//       <nav className="bg-slate-100 shadow-md fixed w-full z-10 top-0">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//           {/* Logo */}
//           <Link
//             to="hero"
//             smooth={true}
//             duration={500}
//             className="flex items-center gap-2 cursor-pointer group"
//           >
//             <div className="text-black bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 p-2 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300 animate-bounce-slow">
//               <FaLaptopCode size={28} />
//             </div>
//             <span className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
//               UI<span className="text-pink-600">byte</span>jas
//             </span>
//           </Link>

//           {/* Hamburger Button (Mobile) */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-black focus:outline-none p-2 rounded-lg bg-slate-300"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 20 22"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               </svg>
//             </button>
//           </div>

//           {/* Nav Links */}
//           <ul
//             className={`flex-col md:flex-row md:flex md:space-x-4 lg:space-x-6 tracking-widest text-black font-medium absolute md:static bg-slate-100 w-full md:w-auto transition-all duration-300 ease-in-out shadow-lg md:shadow-none ${
//               isOpen ? "top-16 left-0 right-0" : "top-[-200px]"
//             }`}
//           >
//             <li>
//               <Link
//                 to="hero"
//                 smooth={true}
//                 spy={true}
//                 offset={-70}
//                 duration={500}
//                 onClick={toggleMenu}
//                 className="block px-4 py-3 md:py-2 hover:text-blue-500 cursor-pointer"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="about"
//                 smooth={true}
//                 spy={true}
//                 offset={-70}
//                 duration={500}
//                 onClick={toggleMenu}
//                 className="block px-4 py-3 md:py-2 hover:text-blue-500 cursor-pointer"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="work"
//                 smooth={true}
//                 spy={true}
//                 offset={-70}
//                 duration={500}
//                 onClick={toggleMenu}
//                 className="block px-4 py-3 md:py-2 hover:text-blue-500 cursor-pointer"
//               >
//                 Project
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="skills"
//                 smooth={true}
//                 spy={true}
//                 offset={-70}
//                 duration={500}
//                 onClick={toggleMenu}
//                 className="block px-4 py-3 md:py-2 hover:text-blue-500 cursor-pointer"
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="contact"
//                 smooth={true}
//                 spy={true}
//                 offset={-70}
//                 duration={500}
//                 onClick={toggleMenu}
//                 className="block px-4 py-3 md:py-2 hover:text-blue-500 cursor-pointer"
//               >
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Nav;


import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Button,
} from "@mui/material";
import { FaLaptopCode, FaBars } from "react-icons/fa"; // ✅ Use FaBars instead of MenuIcon
import { SiBackendless } from "react-icons/si";
import { TbBorderCornerSquare } from "react-icons/tb";

const pages = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Project", id: "work" },
  { name: "Services", id: "skills" },
  { name: "Contact Us", id: "contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const buttonStyle = {
    background: "white",
    color: "black",
    borderRadius: "25px",
    px: 3,
    py: 1,
    fontWeight: 600,
    textTransform: "none",
  };

  const drawer = (
    <Box onClick={toggleDrawer} sx={{ textAlign: "center", py: 2 }}>
      <h2 style={{ margin: "16px 0", fontWeight: "bold" }}>
        UI<span style={{ color: "#FF00FF",textShadow: '#ffcc00 1px 0 10px' }}>byte</span>jas
      </h2>
      <List>
        {pages.map((page) => (
          <ListItem key={page.id} disablePadding sx={{ py: 1 }}>
            <ScrollLink
              to={page.id}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ width: "100%" }}
            >
              {page.name === "Contact Us" ? (
                <Button fullWidth sx={buttonStyle}>
                  {page.name}
                </Button>
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    cursor: "pointer",
                    py: 1,
                    color: "white",
                  }}
                >
                  {page.name}
                </Box>
              )}
            </ScrollLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ boxShadow: 1, background: "#111" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
            <Box
              sx={{
                
                
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SiBackendless size={40} />
            </Box>
            <h2 style={{ fontWeight: "bold", color: "white" }}> 
              UI<span style={{ color: "#EC4899", fontSize:"25px" }}>byte</span>jas
            </h2>
          </Box>

          {/* Desktop Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              alignItems: "center",
            }}
          >
            {pages.map((page) =>
              page.name === "Contact Us" ? (
                <ScrollLink
                  key={page.id}
                  to={page.id}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ textDecoration: "none" }}
                >
                  <Button sx={buttonStyle}>{page.name}</Button>
                </ScrollLink>
              ) : (
                <ScrollLink
                  key={page.id}
                  to={page.id}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  {page.name}
                </ScrollLink>
              )
            )}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer}
            sx={{ display: { md: "none" } }}
          >
            <FaBars size={24} /> {/* ✅ Replaced MenuIcon */}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;

