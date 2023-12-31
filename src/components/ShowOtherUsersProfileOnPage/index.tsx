import viewProfile from "../../api/profiles/viewProfile";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_SOCIAL_PROFILES, userToken } from "../../api/constants";
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
  const { name, email, banner, avatar, _count }: UserProfiles = profile || {};
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
                  content="This is the Net Social page that shows other users on Net Social. The user must first search and click the users first."
                />
                <title>{name}</title>
              </Helmet>
              <main>
                <section>
                  <h1>Username {name}</h1>
                  <h2>Contact {email}</h2>
                  <img src={banner} />
                  <img src={avatar} />
                  <span>Followers: {_count.followers}</span>
                  <span>Following: {_count.following}</span>
                </section>
              </main>
            </>
          )}
        </div>
      ) : (
        <div>{errorMessage}</div>
      )}
    </>
  );
}
