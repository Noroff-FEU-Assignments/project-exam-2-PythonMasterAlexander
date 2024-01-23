import viewProfiles from "../../api/profiles/viewProfiles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_SOCIAL_PROFILES, userToken } from "../../api/constants";
import { UserProfiles } from "../../api/types";
export default function ShowProfilesOnPage() {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [profiles, setProfiles] = useState<UserProfiles[]>([]);

  const URL: string = API_SOCIAL_PROFILES;
  useEffect(() => {
    const fetchProfiles = async function () {
      try {
        const fetchResult = await viewProfiles(URL, userToken);
        setProfiles(fetchResult);
      } catch (error) {
        setIsError(true);
        setErrorMessage("Something went wrong");
      }
    };
    fetchProfiles();
  }, [URL]);
  return (
    <>
      {!isError ? (
        <>
          {profiles && (
            <>
              {profiles.map((profileValue) => (
                <div key={profileValue.email}>
                  {profileValue.name}
                  <Link to={`/other-users-profile-page/${profileValue.name}`}>
                    To other user page
                  </Link>
                </div>
              ))}
            </>
          )}
        </>
      ) : (
        <div>{errorMessage}</div>
      )}
    </>
  );
}
