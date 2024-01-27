import LogoLink from "../LogoLink";
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
            <div className="m-8 flex flex-col sm:flex-row gap-6 justify-between">
              <section className="self-center">
                <LogoLink />
              </section>
              <section className="self-center">
                <Link className="link-text-style-header mr-8" to="/user-home">
                  home
                </Link>
                <Link
                  className="link-text-style-header mr-8"
                  to="/user-profile"
                >
                  profile
                </Link>
                <Link className="link-text-style-header" to="/user-search">
                  users
                </Link>
              </section>
              <section className="self-center hidden xl:block"></section>
            </div>
          </header>
        </>
      )}
    </>
  );
}
