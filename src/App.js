import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Profile from "./pages/profile/Profile";

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Inventory } from "@mui/icons-material";

import {
  userColumns, users, userActions,
  products, productColumns,
  deliveryMenColumns, deliveryMenActions, deliveryMen,
  orders, ordersColumns
} from "./data/data-table-source";

import { newUserInputs, newProductInputs, newDeliveryManInputs } from "./data/inputs-data-source";

import UsersGlobalActions from './components/actions/UsersGlobalActions'
import ProductsGlobalActions from './components/actions/ProductsGlobalActions'
import WorkersGlobalActions from "./components/actions/WorkersGlobalActions";
import OrdersGlobalActions from "./components/actions/OrdersGlobalActions";

import AllCharts from "./components/inner/charts/AllCharts";
import MainLineCharts from "./components/inner/charts/MainLineCharts";
import MainAreaChart from "./components/inner/charts/MainAreaChart";
import MainBarChart from "./components/inner/charts/MainBarChart";
import MainPieChart from "./components/inner/charts/MainPieChart";
import MainScatterChart from "./components/inner/charts/MainScatterChart";
import MainRadarChart from "./components/inner/charts/MainRadarChart";
import MainRadialChart from "./components/inner/charts/MainRadialChart";

import Alerts from "./components/inner/alert/Alerts";
import Boxes from "./components/inner/box/Boxes";
import Button from "./components/inner/button/Button";
import Chips from "./components/inner/chip/Chip";
import GridComp from "./components/inner/grid/GridComp";
import FormComp from "./components/inner/forms/FormComp";
import TableComp from "./components/inner/table/TableComp";
import Notifications from './components/notifications/Notifications';
import Settings from "./pages/settings/Settings";
import AccountSettings from "./pages/settings/AccountSettings";
import ChangePassword from "./pages/settings/ChangePassword";
import EmailSettings from "./pages/settings/EmailSettings";
import PhoneSettings from "./pages/settings/PhoneSettings";
import SocialSettings from "./pages/settings/SocialSettings";
import PictureSettings from "./pages/settings/PictureSettings";
import PersonalSettings from "./pages/settings/PersonalSettings";
import ThemesSettings from "./pages/settings/ThemesSettings";
import {useEffect, useState} from "react";
import Logs from "./pages/logs/Logs";

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  if (theme === 'dark') {
    document.querySelector('html').style.backgroundColor = '#111';
  } else {
    document.querySelector('html').style.backgroundColor = '#f1f1f1';
  }

  return (

    <div className={ theme === 'light' ? 'App' : 'App dark' }>

      <BrowserRouter>

        <Routes>

          <Route path='/'>

            <Route index element={ <Home setTheme={setTheme} /> } />

            <Route path='login' element={ <Login setTheme={setTheme} /> } />

            <Route path='profile' element={ <Profile setTheme={setTheme} /> } />

            <Route path='logs' element={ <Logs setTheme={setTheme} /> } />

            <Route path='settings'>
              <Route exact index element={<Settings setTheme={setTheme} />} />
              <Route path='account' element={<AccountSettings setTheme={setTheme} />} />
              <Route path='password' element={<ChangePassword setTheme={setTheme} />} />
              <Route path='email' element={<EmailSettings setTheme={setTheme} />} />
              <Route path='phone' element={<PhoneSettings setTheme={setTheme} />} />
              <Route path='social' element={<SocialSettings setTheme={setTheme} />} />
              <Route path='picture' element={<PictureSettings setTheme={setTheme} />} />
              <Route path='personal' element={<PersonalSettings setTheme={setTheme} />} />
              <Route path='themes' element={<ThemesSettings setTheme={setTheme} />} />
            </Route>

            <Route path='users'>
              <Route index element={<List setTheme={setTheme} cols={userColumns} data={users} actions={userActions} title='Users Dataset' globalActions={<UsersGlobalActions />} titleIcon={<PeopleAltIcon />} />} />
              <Route path="new" element={<New setTheme={setTheme} data={newUserInputs} title={'Add New Users'} buttonSubmitTitle='New User' />} />
              <Route path=":userId" element={<Single setTheme={setTheme} />} />
            </Route>

            <Route path='delivery-men'>
              <Route index element={<List setTheme={setTheme} cols={deliveryMenColumns} data={deliveryMen} actions={deliveryMenActions} title='Workers Dataset' globalActions={<WorkersGlobalActions />} titleIcon={<DeliveryDiningIcon />} />} />
              <Route path="new" element={<New setTheme={setTheme} data={newDeliveryManInputs} title={'Add New Delivery Workers'} buttonSubmitTitle='New Delivery Worker' />} />
              <Route path=":deliveryManId" element={<Single setTheme={setTheme} />} />
            </Route>

            <Route path='products'>
              <Route index element={<List setTheme={setTheme} cols={productColumns} data={products} actions={userActions} title='Products Dataset' globalActions={<ProductsGlobalActions />} titleIcon={<Inventory />} />} />} />
              <Route path="new" element={<New setTheme={setTheme} data={newProductInputs} title={'Add New Product'} buttonSubmitTitle='Publish Product' />} />
              <Route path=":id" element={<Single setTheme={setTheme} />} />
            </Route>

            <Route path='orders'>
              <Route index element={<List cols={ordersColumns} data={orders} actions={userActions} title='Orders' globalActions={<OrdersGlobalActions />} titleIcon={<Inventory />} />} />} />
              <Route path=":order" element={<Single setTheme={setTheme} />} />
            </Route>

            <Route path='components'>
              <Route path='charts' element={<AllCharts setTheme={setTheme} />} />
              <Route path='charts/line' element={<MainLineCharts setTheme={setTheme} />} />
              <Route path='charts/area' element={<MainAreaChart setTheme={setTheme} />} />
              <Route path='charts/bar' element={<MainBarChart setTheme={setTheme} />} />
              <Route path='charts/pie' element={<MainPieChart setTheme={setTheme} />} />
              <Route path='charts/scatter' element={<MainScatterChart setTheme={setTheme} />} />
              <Route path='charts/radar' element={<MainRadarChart setTheme={setTheme} />} />
              <Route path='charts/radial' element={<MainRadialChart setTheme={setTheme} />} />

              <Route path='alerts' element={<Alerts setTheme={setTheme} />} />
              <Route path='box' element={<Boxes setTheme={setTheme} />} />
              <Route path='buttons' element={<Button setTheme={setTheme} />} />
              <Route path='chips' element={<Chips setTheme={setTheme} />} />
              <Route path='grid' element={<GridComp setTheme={setTheme} />} />
              <Route path='form' element={<FormComp setTheme={setTheme} />} />
              <Route path='tables' element={<TableComp setTheme={setTheme} />} />

            </Route>

            <Route path='/notifications' element={<Notifications />} />

          </Route>

        </Routes>

      </BrowserRouter>

    </div>

  );
}

export default App;
