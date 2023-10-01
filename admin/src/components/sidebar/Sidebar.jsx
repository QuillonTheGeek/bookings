import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import BookIcon from "@mui/icons-material/Book";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StoreMallDirectoryIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ShoppingCartCheckoutIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">UTILITIES</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats </span>
          </li>
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notification </span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MedicationLiquidIcon className="icon" />
            <span>System Health </span>
          </li>
          <li>
            <BookIcon className="icon" />
            <span>Logs </span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings </span>
          </li>
            <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile </span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Logout </span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
}

export default Sidebar;
