import LogOutUser from "../LogOutUser";
import NetSocialLogo from "../NetSocialLogo";
import MoonIcon from "../MoonIcon";
import UserProfileNavigation from "../UserProfileNavigation";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  landingPage,
  createUserPage,
  welcomeNewUserPage,
} from "../../utils/constants";
export default function PageFooter() {
  const [pageNameLocation, setPageNameLocation] = useState<string>("");
  const pageUrlLocation = useLocation();
  useEffect(() => {
    setPageNameLocation(pageUrlLocation.pathname);
  }, [pageUrlLocation.pathname]);
  return (
    <>
      {pageNameLocation === landingPage ||
      pageNameLocation === createUserPage ||
      pageNameLocation === welcomeNewUserPage ? (
        <>
          <footer></footer>
        </>
      ) : (
        <>
          <footer className="border-t-2">
            <div className="m-8 flex gap-8 justify-between items-center flex-col xl:flex-row">
              <section>
                <NetSocialLogo />
              </section>
              <section>
                <UserProfileNavigation />
              </section>
              <section className="xl:hidden">
                <MoonIcon />
              </section>
              <section>
                <LogOutUser />
              </section>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
