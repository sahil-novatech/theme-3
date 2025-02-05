"use client";

import { globalServices } from "@/services/global.services";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import Swal from "sweetalert2";

const inputClass = { input: "h-[54px] px-[6px]", inputWrapper: "h-[54px]" };

const initialFormState = {
  password: "",
  password_confirmation: "",
};

const initialVisibleState = {
  password: false,
  password_confirmation: false,
};

type Props = {
  token: string;
}

const ResetPassword = ({ token }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [visible, setVisible] = useState(initialVisibleState);
  const [errors, setErrors] = useState(initialFormState);
  const router = useRouter();

  const resetForm = () => {
    setFormData(initialFormState);
    setVisible(initialVisibleState);
  };

  const handleValueChange = (name: keyof typeof initialFormState, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const toggleVisibility = (name: keyof typeof initialVisibleState) => {
    setVisible((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    if (password.length < 10) {
      return "The password must be at least 10 characters long.";
    }
    if (!password.match(passwordRegex)) {
      return "The password must contain at least one uppercase letter, one number, and one special character.";
    }
    return "";
  };

  const validateForm = (): boolean => {
    const updatedErrors = {
      password:
        formData.password.trim().length === 0
          ? "The password field is required."
          : validatePassword(formData.password),
      password_confirmation:
        formData.password.trim() &&
        formData.password !== formData.password_confirmation
          ? "Confirmation password does not match the new password."
          : "",
    };

    setErrors(updatedErrors);
    return !Object.values(updatedErrors).some((error) => error !== "");
  };

  const handlePasswordUpdate = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    globalServices.post("/reset-password", { token, ...formData})
    .then((response) => {
      setIsLoading(false);
      if (response.status === 200) {
        resetForm();
        Swal.fire({
          title: "Password Reset Successfully",
          icon: "success",
          timer: 1500,
        });
        setTimeout(() => {
          router.push('/');
        }, 1500);
      }
    }).catch ((err) => {
      if (err.status === 422) {
        if (err.response.data.errors) {
          setErrors((errors) => ({ ...errors, ...err.response.data.errors }));
        }
      }
      setIsLoading(false);
    })
  };

  const renderInput = (
    name: keyof typeof initialFormState,
    placeholder: string,
    isPassword = true
  ) => (
    <Input
      classNames={inputClass}
      isInvalid={!!errors[name]}
      errorMessage={errors[name]}
      value={formData[name]}
      onValueChange={(value) => handleValueChange(name, value)}
      variant="bordered"
      placeholder={placeholder}
      type={visible[name] && isPassword ? "text" : "password"}
      endContent={
        isPassword && (
          <button className="mx-[6px]" onClick={() => toggleVisibility(name)}>
            {visible[name] ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
          </button>
        )
      }
    />
  );

  return (
    <div className="m-10 border rounded-3xl p-10 border-[#ebebeb]">
      <h1 className="font-semibold text-[26px]">Reset Password</h1>
      <div className="flex flex-col gap-6 mt-4">
        {renderInput("password", "New Password")}
        {renderInput("password_confirmation", "Confirm New Password")}
        <Button
          isDisabled={isLoading}
          onPress={handlePasswordUpdate}
          className="idx-button mt-3"
          type="submit"
        >
          Reset Password
        </Button>
      </div>
    </div>
  );
};

export default ResetPassword;