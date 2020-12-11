import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const NavbarItems = [
  {
    title: localStorage.getItem('home'),
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: localStorage.getItem('aboutus'),
    path: '/about',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: localStorage.getItem('products'),
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: localStorage.getItem('gallery'),
    path: '/gallery',
    icon: <AiIcons.AiFillFileImage />,
    cName: 'nav-text'
  },
  {
    title: localStorage.getItem('contactus'),
    path: '/contact',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  }
];
