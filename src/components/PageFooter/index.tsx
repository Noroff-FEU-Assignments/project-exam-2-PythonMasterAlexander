import LogOutUser from "../LogOutUser";
import NetSocialLogo from "../NetSocialLogo";
import MoonIcon from "../MoonIcon";
import UserProfileNavigation from "../UserProfileNavigation";
export default function PageFooter() {
  return (
    <>
      <footer className="border-t-2">
        <div className="m-8 flex gap-8 justify-between items-center flex-col xl:flex-row">
          <section>
            <NetSocialLogo />
          </section>
          <section>
            <UserProfileNavigation />
          </section>
          <section className="xl:hidden flex items-center">
            <MoonIcon />
          </section>
          <section>
            <LogOutUser />
          </section>
        </div>
      </footer>
    </>
  );
}
