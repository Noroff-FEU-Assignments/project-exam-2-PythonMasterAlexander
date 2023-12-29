import viewProfiles from "../../api/profiles/viewProfiles";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loadUserFromLocalStorage } from "../../utils/storage";
import { API_SOCIAL_PROFILES } from "../../api/constants";
export default function UserSearchPage() {
  interface UserProfile {
    _count: {
      posts: number;
      followers: number;
      following: number;
    };
    avatar: string;
    banner: string;
    email: string;
    name: string;
  }
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const URL: string = API_SOCIAL_PROFILES;
  const token: string = "token";
  const userToken = loadUserFromLocalStorage(token);
  useEffect(() => {
    const fetchProfiles = async function () {
      try {
        const fetchResult = await viewProfiles(URL, userToken);
        setProfiles(fetchResult);
      } catch (error) {
        setErrorMessage("Somthing went wrong");
      }
    };
    fetchProfiles();
  }, [URL, userToken]);
  console.log(profiles);
  console.log(errorMessage);
  return (
    <>
      <main>
        <div className="btn-container border-[#cbd5e1]">
          <Link to={"/user-profile-page"}>To profile page</Link>
        </div>
      </main>
    </>
  );
}
