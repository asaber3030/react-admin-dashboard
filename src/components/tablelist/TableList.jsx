import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import './table.scss';

const TableList = () => {

  const rows = [
    {
      id: 222254,
      product: "Acer Nitro 5",
      img: "https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034__340.jpg",
      customer: "John Smith",
      date: "1 March 2022",
      amount: 786,
      method: "Cash on delivery",
      status: true
    },
    {
      id: 213124,
      product: "Honor 8X Pro",
      img: "https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034__340.jpg",
      customer: "John Smith",
      date: "1 March 2022",
      amount: 786,
      method: "Cash on delivery",
      status: true
    },
    {
      id: 453425,
      product: "Mouse Logitech ####",
      img: "https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034__340.jpg",
      customer: "John Smith",
      date: "1 March 2022",
      amount: 786,
      method: "Cash on delivery",
      status: true
    },
    {
      id: 213424,
      product: "ARC Creator",
      img: "https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034__340.jpg",
      customer: "John Smith",
      date: "1 March 2022",
      amount: 786,
      method: "Cash on delivery",
      status: true
    },
    {
      id: 5634634,
      product: "Lenovo Legion 5 - 3060 TI",
      img: "https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034__340.jpg",
      customer: "John Smith",
      date: "1 March 2022",
      amount: 786,
      method: "Cash on delivery",
      status: false
    },
    {
      id: 1231123,
      product: "IPhone 5 Pro Max",
      img: "https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034__340.jpg",
      customer: "John Smith",
      date: "1 March 2022",
      amount: 786,
      method: "Cash on delivery",
      status: false
    }
  ]

  return (
    <div className='table'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell component="th" scope="row">{row.product}</TableCell>
                  <TableCell><img src={row.img} width={50} height={50} alt=""/></TableCell>
                  <TableCell>{row.customer}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.amount} piece</TableCell>
                  <TableCell>{row.method}</TableCell>
                  <TableCell>{row.status === true ? (<CheckIcon className='approved' />) : (<CloseIcon className='not-approved' />) }</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableList;