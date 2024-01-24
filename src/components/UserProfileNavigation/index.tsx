import { userLoginInformation } from "../../api/constants";
export default function UserProfileNavigation() {
  const { name, avatar } = userLoginInformation;
  return (
    <>
      <section className="flex justify-between border-2 w-60 rounded-full p-2 border-[#cbd5e1]">
        <img
          src={avatar}
          className="inline rounded-full w-11"
          alt="any avatar the user have uploaded to display as user profile"
        />
        <span className="capitalize self-center font-poppins font-regular text-theme-color">
          {name}
        </span>
      </section>
    </>
  );
}
