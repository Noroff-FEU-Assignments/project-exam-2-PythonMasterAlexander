import LogOutUser from "../LogOutUser";
import NetSocialLogo from "../NetSocialLogo";
import UserProfileNavigation from "../UserProfileNavigation";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  landingPage,
  createUserPage,
  welcomeNewUserPage,
} from "../../utils/constants";
import { homePage } from "../../utils/constants";

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
          <footer className="border-t-2 mt-auto">
            <div className="m-8 flex gap-8 justify-between items-center flex-col xl:flex-row">
              <section>
                <Link to={homePage}>
                  <NetSocialLogo />
                </Link>
              </section>
              <section className="flex justify-around border-2 w-60 rounded-full py-2 border-[#cbd5e1]">
                <UserProfileNavigation />
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
