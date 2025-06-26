import { useState } from "react";
import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, LogOutIcon, ShipWheelIcon } from "lucide-react";
import useLogout from "../hooks/useLogout";
import ThemeSelector from "./ThemeSelector";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { logoutMutation } = useLogout();

  const [showLogoutModal, setShowLogoutModal] = useState(false); // ⬅️ New state

  return (
    <>
      <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end w-full">
            {/* LOGO - ONLY IN THE CHAT PAGE */}
            {isChatPage && (
              <div className="pl-5">
                <Link to="/" className="flex items-center gap-2.5">
                  <ShipWheelIcon className="size-9 text-primary" />
                  <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                    ChatPoint
                  </span>
                </Link>
              </div>
            )}

            <div className="flex items-center gap-3 sm:gap-4 ml-auto">
              {/* Notifications Icon with Tooltip */}
              <div className="tooltip tooltip-bottom" data-tip="Notifications">
                <Link to="/notifications">
                  <button className="btn btn-ghost btn-circle">
                    <BellIcon className="h-6 w-6 text-base-content opacity-70" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Theme Selector with Tooltip */}
            <div className="tooltip tooltip-bottom" data-tip="Toggle Theme">
              <div>
                <ThemeSelector />
              </div>
            </div>

            {/* Avatar with Tooltip */}
            <div className="tooltip tooltip-bottom" data-tip={authUser?.fullName || "User"}>
              <div className="avatar">
                <div className="w-9 rounded-full">
                  <img src={authUser?.profilePic} alt="User Avatar" rel="noreferrer" />
                </div>
              </div>
            </div>

            {/* Logout Button with Tooltip */}
            <div className="tooltip tooltip-bottom" data-tip="Logout">
              <button
                className="btn btn-ghost btn-circle"
                onClick={() => setShowLogoutModal(true)}
              >
                <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm Logout</h3>
            <p className="py-2">Are you sure you want to log out?</p>
            <div className="modal-action">
              <button className="btn" onClick={() => setShowLogoutModal(false)}>
                Cancel
              </button>
              <button
                className="btn btn-error"
                onClick={() => {
                  setShowLogoutModal(false);
                  logoutMutation();
                }}
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Navbar;
