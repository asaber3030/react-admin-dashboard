import { NavLink } from "react-router-dom";

const ChartsMenu = () => {
  return (
    <div className="chart-title">
      <div className="link-chart"><NavLink to='/components/charts/line'>Line Charts</NavLink></div>
      <div className="link-chart"><NavLink to='/components/charts/area'>Area Charts</NavLink></div>
      <div className="link-chart"><NavLink to='/components/charts/bar'>Bar Charts</NavLink></div>
      <div className="link-chart"><NavLink to='/components/charts/scatter'>Scatter Charts</NavLink></div>
      <div className="link-chart"><NavLink to='/components/charts/pie'>Pie Charts</NavLink></div>
      <div className="link-chart"><NavLink to='/components/charts/radar'>Radar Charts</NavLink></div>
      <div className="link-chart"><NavLink to='/components/charts/radial'>Radial Charts</NavLink></div>
  </div>
  );
}

export default ChartsMenu;