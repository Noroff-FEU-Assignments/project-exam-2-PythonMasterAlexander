import viewProfiles from "../../api/profiles/viewProfiles";
import viewProfile from "../../api/profiles/viewProfile";
import { useEffect } from "react";
import { useState } from "react";
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

  //Create a fetch for /social/profiles/name
  //The name can come from the profiles fetch, I think

  //Create a variable that is the same as the name for each post
  //Then add this variable to the api address
  //Do a API call to this address
  const visitProfile = async function (profileName: string) {
    try {
      const fetchProfile = await viewProfile(
        URL + `/${profileName}`,
        userToken,
      );
      console.log(fetchProfile);
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong");
    }
  };
  visitProfile("zzz");
  //Check if the names are the same
  //Create a onClick function that takes the user to the right profile page
  return (
    <>
      {profiles.map((profile) => (
        <div key={profile.email}>
          {profile.name}

          {/*Use a onClick fuction that takes the user to the specific page by user name by clicking this button*/}
          <button>Visit profile</button>
        </div>
      ))}
    </>
  );
}
