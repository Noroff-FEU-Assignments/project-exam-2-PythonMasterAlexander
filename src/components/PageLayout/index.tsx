import PageHeader from "../PageHeader";
import PageFooter from "../PageFooter";
import { Outlet } from "react-router-dom";
export default function PageLayout() {
  return (
    <>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </>
  );
}
