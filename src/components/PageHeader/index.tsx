import LogoLink from "../LogoLink";
export default function PageHeader() {
  //Use conditional rendering
  //Check which page it is
  //Return one of two components
  return (
    <>
      <header>
        <section>
          <LogoLink />
        </section>
        <section></section>
        <section></section>
      </header>
    </>
  );
}
