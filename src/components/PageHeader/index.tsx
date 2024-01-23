import LogoLink from "../LogoLink";
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
          <header>
            <section>
              <LogoLink />
            </section>
            <section></section>
            <section></section>
          </header>
        </>
      )}
    </>
  );
}
