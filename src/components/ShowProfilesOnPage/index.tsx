import viewProfiles from "../../api/profiles/viewProfiles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_SOCIAL_PROFILES } from "../../api/constants";
import { UserProfiles } from "../../api/types";
import { loadUserFromLocalStorage } from "../../utils/storage";

export default function ShowProfilesOnPage() {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [profiles, setProfiles] = useState<UserProfiles[]>([]);

  const userToken = loadUserFromLocalStorage("token");
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
  }, [URL, userToken]);
  return (
    <>
      {!isError ? (
        <>
          {profiles && (
            <>
              {profiles.slice(0, 10).map((profileValue) => (
                <div className="border-b-2 p-8 flex" key={profileValue.email}>
                  <h2 className="heading-two-font-style">
                    {profileValue.name}
                  </h2>
                  <Link
                    className="btn-container uppercase font-bold font-poppins text-theme-color"
                    to={`/other-users-profile/${profileValue.name}`}
                  >
                    check out
                  </Link>
                </div>
              ))}
            </>
          )}
          <div className="min-h-8"></div>
        </>
      ) : (
        <div>{errorMessage}</div>
      )}
    </>
  );
}
