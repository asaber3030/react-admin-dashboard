import './widget.scss';
import {
  AccountBalanceWalletOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutline,
  ShoppingCartOutlined
} from "@mui/icons-material";

const Widget = ({ type }) => {

  let data;
  let amount = (1000 * Math.random()).toFixed(2);
  let diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "users",
        isMoney: false,
        link: "All Users",
        icon: (
          <PersonOutline className='icon-show'
           style={{
            backgroundColor: 'rgba(187,43,43,0.5)',
            color: '#9b1b1b'
          }}
          />
        )
      }
      break;

    case "order":
      data = {
        title: "orders",
        isMoney: false,
        link: "See All Orders",
        icon: (
          <ShoppingCartOutlined className='icon-show'
            style={{
              backgroundColor: 'rgba(85,103,124,0.76)',
              color: '#343030'
            }}
          />
        )
      }
      break;

    case "earning":
      data = {
        title: "earnings",
        isMoney: true,
        link: "View net Earnings",
        icon: (
          <MonetizationOnOutlined className='icon-show'
            style={{
              backgroundColor: 'rgba(114,227,221,0.5)',
              color: 'rgba(66,175,158,1)'
            }}
          />
        )
      }
      break;

    case "balance":
      data = {
        title: "balance",
        isMoney: true,
        link: "See Details",
        icon: (
          <AccountBalanceWalletOutlined className='icon-show'
            style={{
              backgroundColor: 'rgba(81,144,225,0.5)',
              color: 'rgb(9,72,210)'
            }}
          />
        )
      }
      break;

    default:
      data = {
        title: "users",
        isMoney: false,
        link: "See All Users",
        icon: ( <PersonOutline className='icon-show' /> )
      }
      break;
  }

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{ data.title }</span>
        <span className="counter">{ data.isMoney && "$" } { amount }</span>
        <span className="link">{ data.link }</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          { diff }%
        </div>
        <div className="icon">{ data.icon }</div>
      </div>
    </div>
  );
}

export default Widget