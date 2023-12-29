import viewProfile from "../../api/profiles/viewProfile";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_SOCIAL_PROFILES, userToken } from "../../api/constants";
import { UserProfile } from "../../api/types";
export default function OtherUsersProfilePage() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [userProfileData, setUserProfileData] = useState<UserProfile[]>([]);
  const { name } = useParams();
  const URL: string = API_SOCIAL_PROFILES;

  useEffect(() => {
    const getProfile = async function () {
      try {
        const fetchProfile = await viewProfile(URL + `/${name}`, userToken);
        console.log(fetchProfile);

        setUserProfileData(fetchProfile);
      } catch (error) {
        console.log(error);
        setErrorMessage("Something went wrong");
      }
    };
    getProfile();
  });
  console.log(errorMessage);
  console.log(userProfileData);
  return (
    <>
      <main>
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-home-page"}>To home page</Link>
        </div>
      </main>
    </>
  );
}
