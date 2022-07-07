import React from "react";
import { GridColDef } from "@mui/x-data-grid";

import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';

export const users = [
  {
    id: 1,
    name: "Ahmed Khaled",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    company: "Wordpress"
  },
  {
    id: 2,
    name: "Hesham Bayome",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    company: "Wordpress"
  },
  {
    id: 3,
    name: "Deeetor",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    company: "Wordpress"
  },
  {
    id: 4,
    name: "Senorita",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    company: "Wordpress"
  },
  {
    id: 5,
    name: "Eman Mosaad",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    company: "Wordpress"
  },
  {
    id: 6,
    name: "Sayed ibrahim",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    company: "Wordpress"
  },
  {
    id: 7,
    name: "Omar Saber",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    company: "Wordpress"
  },
  {
    id: 8,
    name: "Abdullah Saber",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    company: "Wordpress"
  },
  {
    id: 9,
    name: "Osama Elzero",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    company: "Wordpress"
  },
  {
    id: 10,
    name: "Mosaad Ahmed",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    company: "Wordpress"
  },
  {
    id: 11,
    name: "Mahmoud Saber",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    company: "Wordpress"
  },
];

export const userColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: .8, maxWidth: 100 },
  {
    field: 'name', headerName: 'Full name', flex: 1,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt='user-image' />
          <span>{params.row.name}</span>
        </div>
      )
    }
  },
  {
    field: 'age', headerName: 'Age', flex: 1,
    renderCell: (params) => {
      return ( <span><span className="bold">{params.row.age}</span> years</span> )
    }
  },
  { field: 'email', headerName: 'E-mail', flex: 1 },
  { field: 'phone', headerName: 'Phone number', flex: 1 },
  { field: 'job', headerName: 'Job Title', flex: 1 },
  { field: 'address', headerName: 'Address', flex: 1 },
  { field: 'faculty', headerName: 'Faculty', flex: 1 },
  { field: 'company', headerName: 'Company name', flex: 1.6 },
];

export const userActions = [
  {
    field: "action",
    headerName: "Actions",
    flex: 1,
    renderCell: (params) => {
      return (
        <div className='actions-div'>
          <a className="btn view-btn" href={params.to}>View</a>
          <a className="btn delete-btn" href={params.to}>Delete</a>
        </div>
      );
    }
  }
];

/* =================================================================== */

export const deliveryMen = [
  {
    id: 1,
    name: "Ahmed Khaled",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    secondaryEmail: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    numberOfOrders: 2
  },
  {
    id: 2,
    name: "Hesham Bayome",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    secondaryEmail: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    numberOfOrders: 2
  },
  {
    id: 3,
    name: "Deeetor",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    secondaryEmail: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    numberOfOrders: 2
  },
  {
    id: 4,
    name: "Senorita",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    secondaryEmail: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    numberOfOrders: 155
  },
  {
    id: 5,
    name: "Eman Mosaad",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    secondaryEmail: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    numberOfOrders: 2
  },
  {
    id: 6,
    name: "Sayed ibrahim",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    secondaryEmail: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    numberOfOrders: 2514
  },
  {
    id: 7,
    name: "Omar Saber",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    secondaryEmail: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    numberOfOrders: 2
  },
  {
    id: 8,
    name: "Abdullah Saber",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    secondaryEmail: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    numberOfOrders: 152
  },
  {
    id: 9,
    name: "Osama Elzero",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    secondaryEmail: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    numberOfOrders: 9
  },
  {
    id: 10,
    name: "Mosaad Ahmed",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    secondaryEmail: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    numberOfOrders: 55
  },
  {
    id: 11,
    name: "Mahmoud Saber",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "snow@snow.com",
    secondaryEmail: "snow@snow.com",
    age: 35,
    job: "Actor",
    address: "Egypt",
    faculty: "Engineering",
    phone: "01276274460",
    numberOfOrders: 10
  },
];

export const deliveryMenColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: .8, maxWidth: 100 },
  {
    field: 'name', headerName: 'Full name', flex: 1,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt='user-image' />
          <span>{params.row.name}</span>
        </div>
      )
    }
  },
  {
    field: 'age', headerName: 'Age', flex: 1,
    renderCell: (params) => {
      return ( <span><span className="bold">{params.row.age}</span> years</span> )
    }
  },
  { field: 'email', headerName: 'E-mail', flex: 1 },
  { field: 'secondaryEmail', headerName: 'Secondary E-mail', flex: 1 },
  { field: 'phone', headerName: 'Phone number', flex: 1 },
  { field: 'job', headerName: 'Job Title', flex: 1 },
  { field: 'address', headerName: 'Address', flex: 1 },
  { field: 'faculty', headerName: 'Faculty', flex: 1 },
  { field: 'numberOfOrders', headerName: 'Number of orders', flex: 1.6, valueGetter: (params) => { return `${params.row.numberOfOrders} orders` } },
];

export const deliveryMenActions = [
  {
    field: "action",
    headerName: "Actions",
    flex: 1,
    renderCell: (params) => {
      return (
        <div className='actions-div'>
          <a className="btn view-btn" href={params.to}>View</a>
          <a className="btn delete-btn" href={params.to}>Delete</a>
        </div>
      );
    }
  }
];


/* =================================================================== */

export const products = [
  {
    id: 1,
    name: "Acer 5 Nitro",
    category: "Monitors",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 2,
    name: "IPhone 11 Pro",
    category: "Mobiles",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 3,
    name: "Logitech G502",
    category: "Mice",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 4,
    name: "Redragon Keyboard K522",
    category: "Keyboards",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 5,
    name: "Laptop Lenovo Legion 5",
    category: "Laptops",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 6,
    name: "RTX 3050",
    category: "Graphics Cards",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 7,
    name: "Desk",
    category: "Office",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 8,
    name: "Mouse Pad",
    category: "Accessories",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 9,
    name: "Calculator",
    category: "Maths",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 1,
    name: "Acer 5 Nitro",
    category: "Monitors",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 1,
    name: "Acer 5 Nitro",
    category: "Monitors",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 1,
    name: "Acer 5 Nitro",
    category: "Monitors",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 1,
    name: "Acer 5 Nitro",
    category: "Monitors",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 1,
    name: "Acer 5 Nitro",
    category: "Monitors",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 1,
    name: "Acer 5 Nitro",
    category: "Monitors",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 1,
    name: "Acer 5 Nitro",
    category: "Monitors",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 1,
    name: "Acer 5 Nitro",
    category: "Monitors",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 1,
    name: "Acer 5 Nitro",
    category: "Monitors",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 1,
    name: "Acer 5 Nitro",
    category: "Monitors",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
  {
    id: 1,
    name: "Acer 5 Nitro",
    category: "Monitors",
    img: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "100 $",
    color: "Red, Green, Blue",
    brand: "Acer",
    quantity: 100,
    views: 1025
  },
]

export const productColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: .8, maxWidth: 100 },
  {
    field: 'name', headerName: 'Product name', flex: 1,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt='product-image' />
          <span>{params.row.name}</span>
        </div>
      )
    }
  },
  {
    field: 'price', headerName: 'Price', flex: 1,
    renderCell: (params) => {
      return ( <span><span className="bold">{params.row.price}</span></span> )
    }
  },
  { field: 'category', headerName: 'Category', flex: 1 },
  { field: 'brand', headerName: 'Brand', flex: 1 },
  { field: 'quantity', headerName: 'Quantity', flex: 1 },
  { field: 'color', headerName: 'Color', flex: 1 },
  { field: 'views', headerName: 'Views', flex: 1 },
];

/* =================================================================== */

export const orders = [
  {
    id: 1,
    product: 'Product name is here',
    total: '100 $',
    orderID: 'RDAF44315QWDA',
    productImage: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    orderedAmount: "100 pieces",
    orderedColor: 'Red',
    orderStatus: 1, // 0: Not Charged Yet , 1: Charged, 2: On Way, 3: Delivered and received
  },
  {
    id: 2,
    product: 'DELL Laptip',
    total: '200 $',
    orderID: 'RDAF44315QWDA',
    productImage: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    orderedAmount: "100 pieces",
    orderedColor: 'Red',
    orderStatus: 0, // 0: Not Charged Yet , 1: Charged, 2: On Way, 3: Delivered and received
  },
  {
    id: 3,
    product: 'Product name is here',
    total: '5020 $',
    orderID: 'CSASD12532A',
    productImage: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    orderedAmount: "100 pieces",
    orderedColor: 'Red',
    orderStatus: 2, // 0: Not Charged Yet , 1: Charged, 2: On Way, 3: Delivered and received
  },
  {
    id: 4,
    product: 'IPhone 13 Pro Max',
    total: '123 $',
    orderID: 'RDAF44315QWDA',
    productImage: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    orderedAmount: "1 pieces",
    orderedColor: 'Red',
    orderStatus: 3, // 0: Not Charged Yet , 1: Charged, 2: On Way, 3: Delivered and received
  },
  {
    id: 5,
    product: 'Product name is here',
    total: '100 $',
    orderID: 'RDAF44315QWDA',
    productImage: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    orderedAmount: "100 pieces",
    orderedColor: 'Red',
    orderStatus: 1, // 0: Not Charged Yet , 1: Charged, 2: On Way, 3: Delivered and received
  },
  {
    id: 6,
    product: 'DELL Laptip',
    total: '200 $',
    orderID: 'RDAF44315QWDA',
    productImage: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    orderedAmount: "100 pieces",
    orderedColor: 'Red',
    orderStatus: 0, // 0: Not Charged Yet , 1: Charged, 2: On Way, 3: Delivered and received
  },
  {
    id: 7,
    product: 'Product name is here',
    total: '5020 $',
    orderID: 'CSASD12532A',
    productImage: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    orderedAmount: "100 pieces",
    orderedColor: 'Red',
    orderStatus: 2, // 0: Not Charged Yet , 1: Charged, 2: On Way, 3: Delivered and received
  },
  {
    id: 8,
    product: 'IPhone 13 Pro Max',
    total: '123 $',
    orderID: 'RDAF44315QWDA',
    productImage: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    orderedAmount: "1 pieces",
    orderedColor: 'Red',
    orderStatus: 3, // 0: Not Charged Yet , 1: Charged, 2: On Way, 3: Delivered and received
  },
  {
    id: 9,
    product: 'Product name is here',
    total: '100 $',
    orderID: 'RDAF44315QWDA',
    productImage: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    orderedAmount: "100 pieces",
    orderedColor: 'Red',
    orderStatus: 1, // 0: Not Charged Yet , 1: Charged, 2: On Way, 3: Delivered and received
  },
];

export const ordersColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 0.6, maxWidth: 100 },
  {
    field: 'product', headerName: 'Ordered Product',
    flex: 1,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.productImage} alt='product-image' />
          <span>{params.row.product}</span>
        </div>
      )
    }
  },
  { field: 'total', headerName: 'Total Price', flex: 1 },
  { field: 'orderID', headerName: 'Order ID', flex: 1 },
  { field: 'orderedAmount', headerName: 'Amount', flex: 1 },
  { field: 'orderedColor', headerName: 'Color', flex: 1 },
  {
    field: 'orderStatus', headerName: 'Status', flex: 1,
    renderCell: (params) => {
      let text = '';
      if (params.row.orderStatus == 0) { text = (<span className='status-order-0'><CloseIcon /> Not Charged Yet</span>) }
      else if (params.row.orderStatus == 1) { text = (<span className='status-order-1'><DomainVerificationIcon /> Charged</span>) }
      else if (params.row.orderStatus == 2) { text = (<span className='status-order-2'><AirportShuttleIcon /> On Way</span>) }
      else if (params.row.orderStatus == 3) { text = (<span className='status-order-3'><CheckIcon /> Delivered and received</span>) }
      else { text = 'Unknown' }

      return (text)
    }
  },
];

