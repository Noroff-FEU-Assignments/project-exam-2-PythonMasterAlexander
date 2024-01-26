import updateMediaOnUserProfile from "../../api/profiles/updateMediaOnUserProfile";
import { API_SOCIAL_PROFILES, userToken, user, put } from "../../api/constants";
import { UserProfile } from "../../api/types";
import { loadUserFromLocalStorage } from "../../utils/storage";
import { useEffect, useState } from "react";
export default function ShowPostMedia() {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const _ACTION: string = "/media";
  const { name }: UserProfile = loadUserFromLocalStorage(user);
  const _USER_NAME: string = `/${name}`;
  const URL: string = API_SOCIAL_PROFILES + _USER_NAME + _ACTION;
  useEffect(() => {
    const changeMedia = async function () {
      try {
        await updateMediaOnUserProfile(URL, userToken, put);
      } catch (error) {
        setErrorMessage("Something went wrong");
        setIsError(true);
      }
    };
    //Code works her, now need to use the values passed in the input fields
    //Add a click event on the buttons to change the media
    changeMedia();
  }, [URL]);
  console.log(isError, errorMessage);
  return (
    <>
      <div>
        <div>
          <p>Avatar</p>
          <input className="primary-input-style" />
          <img />
          <div>
            <button>upgrade</button>
          </div>
        </div>
        <div>
          <p>Banner url</p>
          <input className="primary-input-style" />
          <img />
          <div>
            <button>upgrade</button>
          </div>
        </div>
      </div>
    </>
  );
}
