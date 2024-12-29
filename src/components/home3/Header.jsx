import React from "react";

function Header() {
  return <div>Header</div>;
}

export default Header;

// import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTheme } from '../../../redux/theme/themeSlice';
// import { signoutSuccess } from '../../../redux/user/userSlice';
// import { useEffect, useState } from 'react';
// import { MdPhotoCamera } from "react-icons/md";

// export default function Header() {
//   const path = useLocation().pathname;
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state) => state.user);
//   const { theme } = useSelector((state) => state.theme);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get('searchTerm');
//     if (searchTermFromUrl) {
//       setSearchTerm(searchTermFromUrl);
//     }
//   }, [location.search]);

//   const handleSignout = async () => {
//     try {
//       const res = await fetch('/api/user/signout', {
//         method: 'POST',
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         console.log(data.message);
//       } else {
//         dispatch(signoutSuccess());
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set('searchTerm', searchTerm);
//     const searchQuery = urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   };

//   return (
//     <Navbar className='border-b-2 fixed z-[150] left-0 right-0 top-0'>
//       <Link
//         to='/'
//         className='self-center whitespace-nowrap text-lg sm:text-2xl font-semibold dark:text-white flex justify-center items-center'
//       >
//         <MdPhotoCamera className='text-3xl text-sky-600' />
//         <span className='px-1 py-1 rounded-lg text-sky-600'>Photography</span>
//       </Link>

//       <div className='flex gap-2 md:order-2 items-center'>
//         <button
//           className='w-8 h-8 border flex justify-center items-center dark:border-gray-600 rounded-full md:w-10 md:h-10'
//           onClick={() => dispatch(toggleTheme())}
//         >
//           {theme === 'light' ? <FaSun /> : <FaMoon />}
//         </button>

//         {currentUser ? (
//           <Dropdown
//             arrowIcon={false}
//             inline
//             label={
//               <Avatar alt='utilisateur' img={currentUser.profilePicture} rounded className='w-10 h-10 border rounded-full' />
//             }
//           >
//             <Dropdown.Header>

//               <span className='block text-sm'>@{currentUser.username}</span>
//               <span className='block text-sm font-medium truncate'>
//                 {currentUser.email}
//               </span>

//             </Dropdown.Header>

//             {currentUser.isAdmin && (
//               <Link to='/dashboard?tab=dash'>
//                 <Dropdown.Item labelColor='dark' as='div'>
//                   Tableau de bord
//                 </Dropdown.Item>
//               </Link>
//             )}

//             <Dropdown.Divider />

//             <Link to='/dashboard?tab=profile'>
//               <Dropdown.Item>Profil</Dropdown.Item>
//             </Link>

//             <Dropdown.Divider />

//             {currentUser.isAdmin && (
//               <Link to='/dashboard?tab=create-post'>
//                 <Dropdown.Item labelColor='dark' as='div'>
//                   Créer un post
//                 </Dropdown.Item>
//               </Link>
//             )}

//             <Dropdown.Divider />

//             {currentUser.isAdmin && (
//               <Link to='/dashboard?tab=posts'>
//                 <Dropdown.Item labelColor='dark' as='div'>
//                   Posts
//                 </Dropdown.Item>
//               </Link>
//             )}

//             <Dropdown.Divider />

//             {currentUser.isAdmin && (
//               <Link to='/dashboard?tab=users'>
//                 <Dropdown.Item labelColor='dark' as='div'>
//                   Utilisateurs
//                 </Dropdown.Item>
//               </Link>
//             )}

//             <Dropdown.Divider />

//             {currentUser.isAdmin && (
//               <Link to='/dashboard?tab=comments'>
//                 <Dropdown.Item labelColor='dark' as='div'>
//                   Commentaires
//                 </Dropdown.Item>
//               </Link>
//             )}

//             <Dropdown.Divider />

//             <Dropdown.Item onClick={handleSignout}>Déconnexion</Dropdown.Item>
//           </Dropdown>
//         ) : (
//           <Link to='/sign-in'>
//             <button className='px-3 py-1 rounded-lg bg-sky-500 text-gray-100'>
//               Login
//             </button>
//           </Link>
//         )}

//         <Navbar.Toggle className='w-8 h-8 flex justify-center items-center' />
//       </div>

//       <Navbar.Collapse className=''>
//         <Link to='/' className='grid items-center'>
//           <Navbar.Link
//             active={path === '/'}
//             as={'div'}
//             className={`text-center dark:md:hover:text-sky-500 md:hover:text-sky-700 ${path === '/' ? 'bg-sky-600 text-white rounded-md' : ''
//               }`}
//           >
//             Accueil
//           </Navbar.Link>
//         </Link>

//         <Link to='/about' className='grid items-center'>
//           <Navbar.Link
//             active={path === '/about'}
//             as={'div'}
//             className={`text-center dark:md:hover:text-sky-500 md:hover:text-sky-700  ${path === '/about' ? 'bg-sky-600 text-white rounded-md' : ''
//               }`}
//           >
//             À propos
//           </Navbar.Link>
//         </Link>

//         <Link to='/blogs' className='grid items-center'>
//           <Navbar.Link
//             active={path === '/blogs'}
//             as={'div'}
//             className={`text-center dark:md:hover:text-sky-500 md:hover:text-sky-700  ${path === '/blogs' ? 'bg-sky-600 text-white rounded-md' : ''
//               }`}
//           >
//             Blogs
//           </Navbar.Link>
//         </Link>

//         <Link to='/reservation' className='grid items-center'>
//           <Navbar.Link
//             active={path === '/reservation'}
//             as={'div'}
//             className={`text-center ${path === '/reservation' ? 'bg-sky-600 text-white rounded-md' : ''
//               }`}
//           >
//             <p
//               className='px-3 py-1 rounded-lg border border-sky-600 text-sky-600 text-md' >
//               Rendez-vous
//             </p>
//           </Navbar.Link>
//         </Link>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }
