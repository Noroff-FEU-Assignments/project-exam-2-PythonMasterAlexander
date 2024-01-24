import { userLoginInformation } from "../../api/constants";
export default function UserProfileNavigation() {
  const { name, avatar } = userLoginInformation;
  return (
    <>
      <section className="flex justify-between border-2 w-60 rounded-full p-2">
        <img
          src={avatar}
          className="inline rounded-full w-11"
          alt="any avatar the user have uploaded to display as user profile"
        />
        <span className="self-center">{name}</span>
      </section>
    </>
  );
}
