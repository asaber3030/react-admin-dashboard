import './featured.scss';

import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from "@mui/icons-material";

import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="title-top">
        Total Revenue
        <MoreVert fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total Sales Made Today</p>
        <div className="amount">420 $</div>
        <div className="desc">Total Previous Transactions</div>
        <div className="items">
          <div className="item">
            <div className="item-title">Target</div>
            <div className="item-result negative">
              <KeyboardArrowDown fontSize='small' />
              <div className="item-amount">20.1k</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Week</div>
            <div className="item-result positive">
              <KeyboardArrowUp fontSize='small' />
              <div className="item-amount">20.1k</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Month</div>
            <div className="item-result negative">
              <KeyboardArrowDown fontSize='small' />
              <div className="item-amount">20.1k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;