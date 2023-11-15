import { Outlet } from "react-router-dom";
export default function PageLayouts() {
  return (
    <>
      {/*Here commes the Header*/}
      <Outlet />
      {/*Here commes the Footer*/}
    </>
  );
}
