import updateMediaOnUserProfile from "../../api/profiles/updateMediaOnUserProfile";
import { API_SOCIAL_PROFILES, userToken, user, put } from "../../api/constants";
import { UserProfile } from "../../api/types";
import { loadUserFromLocalStorage } from "../../utils/storage";
import { useEffect, useState } from "react";
export default function ShowPostMedia() {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const _ACTION: string = "/media";
  const { name, email, banner, avatar }: UserProfile =
    loadUserFromLocalStorage(user);
  const _USER_NAME: string = `/${name}`;
  const URL: string = API_SOCIAL_PROFILES + _USER_NAME + _ACTION;
  useEffect(() => {
    const changeMedia = async function () {
      try {
        const fetchResult = await updateMediaOnUserProfile(URL, userToken, put);
        console.log(fetchResult);
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
  console.log(URL);
  console.log(email);
  console.log(banner);
  console.log(avatar);
  return (
    <>
      <div>
        <div>
          <p>Avatar</p>
          <input className="primary-input-style" />
          <img />
          <button>Change avatar</button>
        </div>
        <div>
          <p>Banner</p>
          <input className="primary-input-style" />
          <img />
          <button>Change Banner</button>
        </div>
      </div>
    </>
  );
}
