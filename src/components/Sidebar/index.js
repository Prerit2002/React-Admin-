import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from "react-router-dom";

const NavItem = ({ navItem }) => {
    return (
      <li className="p-5 md:w-1/2 flex items-centre cursor-pointer  ">
        <Link className="nav-link"  to={`/${navItem.link}`}>
          {navItem.text} <span className="sr-only">(current)</span>
        </Link>
      </li>
    );
  };


export default function Sidebar() {
    return (
        <div className=" bg-gray-900 flex ">
            <div className="sticky flex flex-wrap bg-gray-900 h-screen  h-30 position: sticky top-50">
            <div className="bg-gray-900 p-2">
                <div className="pt-2 mb-5 bg-gray-900 rounded-md ">
                    <h3 className="pl-2 text-md font-bold text-gray-400">
                        DashBoard
                    </h3>
                    <ul className="sticky p-5 bg-gray-900 text-white list-none">
                        {/* <li className="p-5 flex items-centre cursor-pointer ">
                            <HomeIcon />
                            Home
                        </li>
                        <li className="p-5 flex items-centre cursor-pointer ">
                        <PeopleIcon />
                            Employess
                           
                        </li>
                        <li className="p-5 flex items-centre cursor-pointer ">
                            <TrendingUpIcon />
                            Leads Tracking
                        </li>
                        <li className="p-5 flex items-centre cursor-pointer ">
                            <AccountBalanceWalletIcon />
                            Pay-outs
                        </li>
                        <li className="p-5 flex items-centre cursor-pointer ">
                            <CreditCardIcon />
                            Commisions
                        </li>
                        <li className="p-5 flex items-centre cursor-pointer ">
                            <SettingsIcon />
                            Settings
                        </li> */}
                        {[
              {
                link: "",
                text: "Home",
              },
              {
                link: "employees",
                text: "Employees",
              },
              {
                link: "leads",
                text: "Leads ",
              },
              {
                link: "commision",
                text: "Commisions",
              },
              {
                link: "settings",
                text: "Settings",
              }
            ].map((navItem, index) => {
              return <NavItem key={index} navItem={navItem} />;
            })}
                    </ul>
                </div>
            </div>   
        </div>
        </div>
        
    )
}
