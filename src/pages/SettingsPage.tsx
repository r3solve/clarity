import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function SettingsPage() {
  return (
    <div className="w-full h-full flex flex-col px-3 ">
      <nav className="mx-auto h-14 w-4/5 border-b-slate-200 border-b rounded-sm flex flex-row  ">
        <h1 className="mx-2 text-3xl mt-3 text-gray-700 font-noto-sans font-light">
          Settings
        </h1>
        <ul className="ml-auto mt-3 ">
          <NavLink
            className={({ isActive }) =>
              ` ${
                isActive && "border-b-2"
              } mx-12 text-xl font-noto-sans text-gray-700 border-b-gray-700 `
            }
            to="profile"
          >
            Profile
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` ${
                isActive && "border-b-2"
              }  text-xl font-noto-sans text-gray-700 border-b-gray-700 `
            }
            to="account"
          >
            Account
          </NavLink>
        </ul>
      </nav>
      <div className="w-full h-4/5">
        <Outlet />
      </div>
    </div>
  );
}

export default SettingsPage