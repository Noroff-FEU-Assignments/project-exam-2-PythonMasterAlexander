import updateMediaOnUserProfile from "../../api/profiles/updateMediaOnUserProfile";
import { API_SOCIAL_PROFILES, userToken, user, put } from "../../api/constants";
import { UserProfile, MediaEntry } from "../../api/types";
import { loadUserFromLocalStorage } from "../../utils/storage";
import { useState } from "react";

//import { useForm } from "react-hook-form";
//import { yupResolver } from "@hookform/resolvers/yup";
//import { updateAvatarAndBannerSchema } from "../../utils/userSchema";

export default function ShowPostMedia() {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [avatarInput, setAvatarInput] = useState<string>("");
  const [bannerInput, setBannerInput] = useState<string>("");

  /*
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MediaEntry>({
    resolver: yupResolver(updateAvatarAndBannerSchema ),
  });
  */

  const _ACTION: string = "/media";
  const { name }: UserProfile = loadUserFromLocalStorage(user);
  const _USER_NAME: string = `/${name}`;
  const URL: string = API_SOCIAL_PROFILES + _USER_NAME + _ACTION;

  // There is an error here, the user can send a empty request. This must be stopped using an message that the two input fields must be populated
  // If I send two valid strings in the input fields, the request comes through but its not showing on the page
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
      <div className="flex flex-col gap-8">
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
        <div className="btn-container">
          <button
            onClick={changeMedia}
            className="font-poppins text-theme-color font-regular"
          >
            upgrade
          </button>
        </div>
        {isError && <p className="error-text-style">{errorMessage}</p>}
      </div>
    </>
  );
}
