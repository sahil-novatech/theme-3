"use client";

import { globalServices } from "@/services/global.services";
import { UserProfile } from "@/src/types/user";
import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const inputClass = { input: "h-[54px] px-[6px]", inputWrapper: "h-[54px]" };

const initialFormState = {
  facebook_url: "",
  twitter_url: "",
  instagram_url: "",
  linkedin_url: "",
};

type Props = {
  userData: UserProfile;
}

const SocialMediaForm = ({ userData }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialFormState);

  useEffect(() => {
    if(userData?.social_media && userData.social_media){
      setFormData((form) => ({ ...form, ...userData.social_media }));
    }
  }, [userData]);

  const handleValueChange = (name: keyof typeof initialFormState, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateUrl = (url: string): string => {
    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?(\?.*)?$/;
    return url.match(urlRegex) ? "" : "Please enter a valid link";
  };

  const validateForm = (): boolean => {
    const updatedErrors = Object.keys(initialFormState).reduce((acc, key) => {
      const field = key as keyof typeof initialFormState;
      const value = formData[field].trim();
      acc[field] = value.length === 0
        ? ''
        : validateUrl(value);
      return acc;
    }, {} as typeof initialFormState);

    setErrors(updatedErrors);
    return !Object.values(updatedErrors).some((error) => error !== "");
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    globalServices.update("/update-social-media",
      Object.fromEntries(
        Object.entries(formData).filter(([, value]) => value.trim().length > 0)
      )
    )
    .then((res) => {
      if(res.status === 200){
        setIsLoading(false);
        Swal.fire({
          title: "Social media links updated successfully",
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    .catch((err) => {
      if (err.status === 422) {
        if (err.response.data.errors) {
          setErrors((errors) => ({ ...errors, ...err.response.data.errors }));
        }
      }
      setIsLoading(false);
    })
  };

  const renderInput = (name: keyof typeof initialFormState, placeholder: string) => (
    <Input
      value={formData[name]}
      onValueChange={(value) => handleValueChange(name, value)}
      isInvalid={!!errors[name]}
      errorMessage={errors[name]}
      classNames={inputClass}
      variant="bordered"
      placeholder={placeholder}
      type="text"
    />
  );

  return (
    <div className="flex flex-col gap-6 mt-4">
      <div className="flex w-full items-start flex-wrap md:flex-nowrap gap-6">
        {renderInput("facebook_url", "Facebook URL")}
        {renderInput("twitter_url", "Twitter URL")}
      </div>
      <div className="flex w-full items-start flex-wrap md:flex-nowrap gap-6">
        {renderInput("instagram_url", "Instagram URL")}
        {renderInput("linkedin_url", "LinkedIn URL")}
      </div>
      <Button
        isDisabled={isLoading || !Object.values(formData).some((value) => value.trim().length > 0)}
        onPress={handleSubmit}
        className="idx-button mt-3"
      >
        Update Social
      </Button>
    </div>
  );
};

export default SocialMediaForm;