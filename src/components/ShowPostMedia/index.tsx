import updateMediaOnUserProfile from "../../api/profiles/updateMediaOnUserProfile";
import { API_SOCIAL_PROFILES, put } from "../../api/constants";
import { MediaEntry } from "../../api/types";
import { loadUserFromLocalStorage } from "../../utils/storage";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateAvatarAndBannerSchema } from "../../utils/userSchema";

export default function ShowPostMedia() {
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MediaEntry>({
    resolver: yupResolver(updateAvatarAndBannerSchema),
  });
  const _ACTION: string = "/media";
  const { name } = loadUserFromLocalStorage("user");
  const userToken: string = loadUserFromLocalStorage("token");
  const _USER_NAME: string = `/${name}`;
  const URL: string = API_SOCIAL_PROFILES + _USER_NAME + _ACTION;
  const onSubmit: SubmitHandler<MediaEntry> = async (formData) => {
    try {
      await updateMediaOnUserProfile(URL, userToken, put, formData);
      reset();
    } catch (error) {
      setErrorMessage("Something went wrong");
      setIsError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <div>
            <p className="paragraph-font-style">Banner</p>
            <input
              placeholder="Update banner"
              {...register("banner")}
              className="primary-input-style"
            />
            <p className="error-text-style">{errors.banner?.message}</p>
          </div>
          <div>
            <p className="paragraph-font-style">Avatar url</p>
            <input
              placeholder="Update avatar"
              {...register("avatar")}
              className="primary-input-style"
            />
            <p className="error-text-style">{errors.avatar?.message}</p>
          </div>
          <div className="btn-container">
            <button type="submit" className="secondary-button-style">
              upgrade
            </button>
          </div>
          {isError && <p className="error-text-style">{errorMessage}</p>}
        </div>
      </form>
    </>
  );
}
