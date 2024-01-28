import viewProfile from "../../api/profiles/viewProfile";
import followOrUnfollowProfiles from "../../api/profiles/followOrUnfollowProfiles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  API_SOCIAL_PROFILES,
  FOLLOW,
  UNFOLLOW,
  put,
} from "../../api/constants";
import { UserProfiles } from "../../api/types";
import { Helmet } from "react-helmet";
import { loadUserFromLocalStorage } from "../../utils/storage";

export default function ShowOtherUsersProfileOnPage() {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [profile, setProfile] = useState<UserProfiles>();
  const userToken: string = loadUserFromLocalStorage("token");
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
  }, [URL, param, userToken]);
  const { name, email, banner, avatar }: UserProfiles = profile || {
    _count: {
      posts: 0,
      followers: 0,
      following: 0,
    },
    name: "",
    email: "",
    banner: "",
    avatar: "",
  };
  const [isFollowing, setIsFollowing] = useState(false);
  const [followUserText, setFollowUserText] = useState("");
  const FOLLOW_USER: string = `${URL}/${name}${FOLLOW}`;
  const UNFOLLOW_USER: string = `${URL}/${name}${UNFOLLOW}`;
  const followUser = async function () {
    try {
      await followOrUnfollowProfiles(FOLLOW_USER, userToken, put);
      setIsFollowing(true);
      setFollowUserText("Following user");
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };
  const [notFollowingUserText, setnotFollowingUserText] = useState("");
  const unFollowUser = async function () {
    try {
      await followOrUnfollowProfiles(UNFOLLOW_USER, userToken, put);
      setnotFollowingUserText("Not following user");
    } catch (error) {
      setErrorMessage("Something went wrong");
    }
  };

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
              <div className="border-b-2 mx-8 border-x-2 xl:mx-64 md:mx-32">
                <img
                  className="object-cover max-h-96 w-full"
                  src={banner}
                  alt={
                    avatar
                      ? "any avatar the user have uploaded to display as user profile"
                      : ""
                  }
                />
                <div className="p-8">
                  <h2 className="heading-two-font-style">{name}</h2>
                  <h3 className="heading-three-font-style">Contact</h3>
                  <p className="paragraph-font-style">{email}</p>
                  <img
                    className="inline rounded-full w-36"
                    src={avatar}
                    alt={
                      avatar
                        ? "any avatar the user have uploaded to display as user profile"
                        : ""
                    }
                  />
                  <div>
                    <p className="paragraph-font-style">
                      {isFollowing ? followUserText : notFollowingUserText}
                    </p>
                  </div>
                  <div className="flex gap-8">
                    <div className="btn-container md:w-full xl:w-1/3">
                      <button
                        className="uppercase font-poppins font-bold text-theme-color text-base"
                        onClick={followUser}
                      >
                        Follow
                      </button>
                    </div>
                    <div className="btn-container md:w-full xl:w-1/3">
                      <button
                        className="uppercase font-poppins font-bold text-theme-color text-base"
                        onClick={unFollowUser}
                      >
                        Unfollow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-h-8 mx-8 border-x-2 xl:mx-64 md:mx-32"></div>
            </>
          )}
        </div>
      ) : (
        <div>{errorMessage}</div>
      )}
    </>
  );
}
