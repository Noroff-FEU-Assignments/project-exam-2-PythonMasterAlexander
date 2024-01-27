import viewProfile from "../../api/profiles/viewProfile";
import followOrUnfollowProfiles from "../../api/profiles/followOrUnfollowProfiles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  API_SOCIAL_PROFILES,
  FOLLOW,
  UNFOLLOW,
  userToken,
  put,
} from "../../api/constants";
import { UserProfiles } from "../../api/types";
import { Helmet } from "react-helmet";

export default function ShowOtherUsersProfileOnPage() {
  const [isError, setIsError] = useState<boolean>(false);
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
        setIsError(true);
        setErrorMessage("Something went wrong");
      }
    };
    getProfile();
  }, [URL, param]);
  const { name, email, banner, avatar }: UserProfiles = profile || {};
  const FOLLOW_USER: string = `${URL}/${name}${FOLLOW}`;
  const UNFOLLOW_USER: string = `${URL}/${name}${UNFOLLOW}`;
  const followUser = async function () {
    try {
      await followOrUnfollowProfiles(FOLLOW_USER, userToken, put);
      console.log("You are now following this user");
    } catch (error) {
      console.log(error);
    }
  };
  const unFollowUser = async function () {
    try {
      await followOrUnfollowProfiles(UNFOLLOW_USER, userToken, put);
      console.log("You are not following this user");
    } catch (error) {
      console.log(error);
    }
  };
  // Code works now, next is to build out the logic for telling the user if this works or not
  return (
    <>
      {!isError ? (
        <div>
          {profile && (
            <>
              <Helmet>
                <meta charSet="utf-8" />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
                <meta
                  name="description"
                  content="This is the Net Social page that shows another user on Net Social."
                />
                <title>{name}</title>
              </Helmet>
              <div className="mx-8 border-x-2 xl:mx-64 md:mx-32">
                <div className="border-b-2">
                  <h2 className="heading-two-font-style">{name}</h2>
                  <h3 className="capitalize text-base">Contact {email}</h3>
                  <img src={banner} />
                  <img src={avatar} />
                  <div>
                    <button onClick={followUser}>Follow</button>
                  </div>
                  <div>
                    <button onClick={unFollowUser}>Unfollow</button>
                  </div>
                </div>
                <div className="min-h-8"></div>
              </div>
            </>
          )}
        </div>
      ) : (
        <div>{errorMessage}</div>
      )}
    </>
  );
}
