import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import './logs.scss';

import LocalActivityIcon from '@mui/icons-material/LocalActivity';

const Logs = ({setTheme}) => {
  return (
    <div className="single-page main-container">

      <Sidebar setTheme={setTheme} />

      <div className="single-container page-container">

        <Navbar setTheme={setTheme} />

        <div className="logs-container">

          <h1><LocalActivityIcon size={'large'} /> All My Activity</h1>

          <div className="logs">

            <div className="log">
              <div className="icon">
                <LocalActivityIcon />
              </div>
              <div className="text">
                <h3>Title of activity goes here!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae delectus dolore ducimus eius eos, exercitationem laudantium libero magnam modi necessitatibus nesciunt numquam possimus quisquam reprehenderit, ut vitae, voluptatum? Illum.</p>
              </div>
            </div>

            <div className="log">
              <div className="icon">
                <LocalActivityIcon />
              </div>
              <div className="text">
                <h3>Title of activity goes here!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae delectus dolore ducimus eius eos, exercitationem laudantium libero magnam modi necessitatibus nesciunt numquam possimus quisquam reprehenderit, ut vitae, voluptatum? Illum.</p>
              </div>
            </div>

            <div className="log">
              <div className="icon">
                <LocalActivityIcon />
              </div>
              <div className="text">
                <h3>Title of activity goes here!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae delectus dolore ducimus eius eos, exercitationem laudantium libero magnam modi necessitatibus nesciunt numquam possimus quisquam reprehenderit, ut vitae, voluptatum? Illum.</p>
              </div>
            </div>

            <div className="log">
              <div className="icon">
                <LocalActivityIcon />
              </div>
              <div className="text">
                <h3>Title of activity goes here!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae delectus dolore ducimus eius eos, exercitationem laudantium libero magnam modi necessitatibus nesciunt numquam possimus quisquam reprehenderit, ut vitae, voluptatum? Illum.</p>
              </div>
            </div>

            <div className="log">
              <div className="icon">
                <LocalActivityIcon />
              </div>
              <div className="text">
                <h3>Title of activity goes here!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae delectus dolore ducimus eius eos, exercitationem laudantium libero magnam modi necessitatibus nesciunt numquam possimus quisquam reprehenderit, ut vitae, voluptatum? Illum.</p>
              </div>
            </div>

            <div className="log">
              <div className="icon">
                <LocalActivityIcon />
              </div>
              <div className="text">
                <h3>Title of activity goes here!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae delectus dolore ducimus eius eos, exercitationem laudantium libero magnam modi necessitatibus nesciunt numquam possimus quisquam reprehenderit, ut vitae, voluptatum? Illum.</p>
              </div>
            </div>

            <div className="log">
              <div className="icon">
                <LocalActivityIcon />
              </div>
              <div className="text">
                <h3>Title of activity goes here!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae delectus dolore ducimus eius eos, exercitationem laudantium libero magnam modi necessitatibus nesciunt numquam possimus quisquam reprehenderit, ut vitae, voluptatum? Illum.</p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>

  );
}
export default Logs;