import LogoLink from "../LogoLink";
import MoonIcon from "../MoonIcon";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  landingPage,
  createUserPage,
  welcomeNewUserPage,
} from "../../utils/constants";
export default function PageHeader() {
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
          <header></header>
        </>
      ) : (
        <>
          <header className="border-b-2">
            <div className="m-8 flex justify-between">
              <section>
                <LogoLink />
              </section>
              <section className="self-center">
                <Link
                  className="link-text-style-header mr-8"
                  to="/user-home-page"
                >
                  home
                </Link>
                <Link
                  className="link-text-style-header"
                  to="/user-profile-page"
                >
                  profile
                </Link>
              </section>
              <section className="self-center">
                <div>
                  <MoonIcon />
                </div>
              </section>
            </div>
          </header>
        </>
      )}
    </>
  );
}
