import viewProfiles from "../../api/profiles/viewProfiles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_SOCIAL_PROFILES, userToken } from "../../api/constants";
import { UserProfile } from "../../api/types";
export default function ShowProfilesOnPage() {
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
      {profiles.map((profile) => (
        <div key={profile.email}>
          {profile.name}
          <Link to={`other-users-profile-page/${profile.name}`}>
            To other user page
          </Link>
        </div>
      ))}
    </>
  );
}
