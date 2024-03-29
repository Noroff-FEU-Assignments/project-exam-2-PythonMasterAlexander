import viewProfile from "../../api/profiles/viewProfile";
import followOrUnfollowProfiles from "../../api/profiles/followOrUnfollowProfiles";
import defaultBanner from "../../resources/banner.svg";
import defaultAvatar from "../../resources/avatar.svg";
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
  const [notFollowingUserText, setNotFollowingUserText] = useState("");
  const unFollowUser = async function () {
    try {
      await followOrUnfollowProfiles(UNFOLLOW_USER, userToken, put);
      setNotFollowingUserText("Not following user");
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
                  src={banner ? banner : defaultBanner}
                  alt={avatar ? "User banner" : undefined}
                />
                <div className="p-8 flex flex-col flex-wrap justify-between gap-8 xl:flex-row">
                  <h2 className="w-full heading-two-font-style">{name}</h2>
                  <div className="flex flex-col md:flex-row justify-between md:gap-8">
                    <h2 className="heading-four-font-style">Contact</h2>
                    <p className="mb-2 paragraph-font-style">{email}</p>
                    <img
                      className="inline w-12 md:w-16"
                      src={avatar ? avatar : defaultAvatar}
                      alt={avatar ? "User avatar" : undefined}
                    />
                  </div>
                  <div className="flex gap-8 flex-col w-full">
                    <div>
                      <p className="paragraph-font-style">
                        {isFollowing
                          ? followUserText
                          : notFollowingUserText || "Not following user"}
                      </p>
                    </div>
                    <div className="btn-container">
                      <button
                        className="primary-button-style"
                        onClick={followUser}
                      >
                        Follow
                      </button>
                    </div>
                    <div className="btn-container">
                      <button
                        className="primary-button-style"
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
        <div className="error-text-style">{errorMessage}</div>
      )}
    </>
  );
}
