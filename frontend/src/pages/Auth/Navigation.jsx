import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../../redux/api/userApiSlice";
import { toast } from "react-toastify";
import { logout } from "../../redux/features/auth/authSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [logoutUser] = useLogoutUserMutation();

  const productCount = useSelector((state) => state.cart.cartItems.length);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/");
      toast.success("Logged Out Successfully!");
    } catch (error) {
      toast.error("Logout errror");
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        style={{ zIndex: 999 }}
        className="bg-orange-400 h-[5rem] w-full flex items-center justify-center  fixed"
      >
        <div className="flex  w-[80%] ">
          <Link className="text-3xl font-bold">GoFood</Link>
          <div className="flex items-center justify-between w-[95%]">
            <Link to="/">
              <div className="ml-4 text-xl">Home</div>
            </Link>
            <div className="flex space-x-3">
              {userInfo ? (
                <>
                  <Link
                    to="/profile"
                    className="text-2xl font-bold tracking-widest text-white  "
                  >
                    {userInfo.username}
                  </Link>
                  <Link
                    to="/"
                    className="px-4 py-2  bg-black text-white rounded-lg"
                    onClick={logoutHandler}
                  >
                    Logout
                  </Link>
                  <Link to="/cart" className="relative">
                    <AiOutlineShoppingCart size={32} className="text-white" />
                    <div className="absolute bottom-7 rounded-full text-xs border left-6 px-1 text-white  bg-black">
                      {productCount}
                    </div>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 bg-black text-white rounded-lg "
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-black text-white rounded-lg"
                  >
                    SignUp
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
