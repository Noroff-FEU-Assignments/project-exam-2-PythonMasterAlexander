import viewProfiles from "../../api/profiles/viewProfiles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_SOCIAL_PROFILES, userToken } from "../../api/constants";
import { UserProfile } from "../../api/types";
//import ShowProfilesOnPage from "../../components/ShowProfilesOnPage";
export default function UserSearchPage() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [profiles, setProfiles] = useState<UserProfile[]>([]);

  const URL: string = API_SOCIAL_PROFILES;
  useEffect(() => {
    const fetchProfiles = async function () {
      try {
        const fetchResult = await viewProfiles(URL, userToken);
        setProfiles(fetchResult);
      } catch (error) {
        setErrorMessage("Something went wrong");
      }
    };
    fetchProfiles();
  }, [URL]);
  console.log(profiles);
  console.log(errorMessage);
  return (
    <>
      <main>
        <section>
          {profiles.map((profile) => (
            <div key={profile.email}>
              {profile.name}
              <Link to={`other-users-profile-page/${profile.name}`}>
                To other user page
              </Link>
            </div>
          ))}
        </section>
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-profile-page"}>To profile page</Link>
        </div>
      </main>
    </>
  );
}
