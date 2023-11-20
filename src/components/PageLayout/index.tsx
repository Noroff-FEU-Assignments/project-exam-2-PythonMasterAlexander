import PageHeader from "../PageHeader";
import PageFooter from "../PageFooter";
import { Outlet } from "react-router-dom";
export default function PageLayout() {
  return (
    <div className="bg-white">
      <PageHeader />
      <Outlet />
      <PageFooter />
    </div>
  );
}
