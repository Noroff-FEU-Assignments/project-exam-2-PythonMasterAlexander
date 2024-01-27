import updateMediaOnUserProfile from "../../api/profiles/updateMediaOnUserProfile";
import { API_SOCIAL_PROFILES, userToken, user, put } from "../../api/constants";
import { UserProfile, MediaEntry } from "../../api/types";
import { loadUserFromLocalStorage } from "../../utils/storage";
import { useState } from "react";

export default function ShowPostMedia() {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [avatarInput, setAvatarInput] = useState<string>("");
  const [bannerInput, setBannerInput] = useState<string>("");

  const _ACTION: string = "/media";
  const { name }: UserProfile = loadUserFromLocalStorage(user);
  const _USER_NAME: string = `/${name}`;
  const URL: string = API_SOCIAL_PROFILES + _USER_NAME + _ACTION;

  const changeMedia = async function () {
    try {
      const data: MediaEntry = {
        banner: bannerInput,
        avatar: avatarInput,
      };
      await updateMediaOnUserProfile(URL, userToken, put, data);
    } catch (error) {
      setErrorMessage("Something went wrong");
      setIsError(true);
    }
  };
  return (
    <>
      <div>
        <div>
          <p className="font-poppins text-theme-color">Banner</p>
          <input
            value={bannerInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBannerInput(e.target.value)
            }
            className="primary-input-style"
          />
          <img />
        </div>
        <div>
          <p className="font-poppins text-theme-color">Avatar url</p>
          <input
            value={avatarInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAvatarInput(e.target.value)
            }
            className="primary-input-style"
          />
          <img />
        </div>
        <div>
          <button
            onClick={changeMedia}
            className="font-poppins text-theme-color"
          >
            upgrade
          </button>
        </div>
        {isError && <p className="error-text-style">{errorMessage}</p>}
      </div>
    </>
  );
}
