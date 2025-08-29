import Headers from "../UI/Headers";
import Footer from "../UI/Footer";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <>
      <Headers></Headers>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
export default AppLayout;
