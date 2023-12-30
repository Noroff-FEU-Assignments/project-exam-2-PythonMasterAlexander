import viewProfile from "../../api/profiles/viewProfile";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_SOCIAL_PROFILES, userToken } from "../../api/constants";
import { UserProfiles } from "../../api/types";
export default function ShowOtherUsersProfileOnPage() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [profile, setProfile] = useState<UserProfiles | undefined>();
  const param = useParams<{ name: string }>();
  const URL: string = API_SOCIAL_PROFILES;
  useEffect(() => {
    const getProfile = async function () {
      try {
        const fetchProfile = await viewProfile(
          URL + `/${param.name}`,
          userToken,
        );
        setProfile(fetchProfile);
      } catch (error) {
        setErrorMessage("Something went wrong");
      }
    };
    getProfile();
  }, [URL, param]);
  console.log(errorMessage);
  console.log(profile);
  return <></>;
}
