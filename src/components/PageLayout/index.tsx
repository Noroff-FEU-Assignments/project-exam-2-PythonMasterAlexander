import { Outlet } from "react-router-dom";
export default function PageLayout() {
  return (
    <>
      {/*Here commes the Header*/}
      <Outlet />
      {/*Here commes the Footer*/}
    </>
  );
}
