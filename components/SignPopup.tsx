import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
import styles from "@/styles/SignPopup.module.scss";
import { useEffect, useState } from "react";
// import Link from "next/link";
// import { globalServices } from "@/services/global.services";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
// import Swal from 'sweetalert2'
// import { useGlobalContext } from "@/context/GlobalContext";
import { useLoginModalContext } from "@/context/LoginModalContext";

const inputClass = { input: "h-[54px] px-[6px]", inputWrapper: "h-[54px]" };

const initialErrors = {
  name: "",
  email: "",
  phone: "",
  password: "",
  rePassword: "",
  checked: "",
};

export default function SignPopup() {
  const {isOpen, onOpenChange } = useLoginModalContext();
  // const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRePasswordVisible, setIsRePasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const [isForgot, setIsForgot] = useState(false);
  // const { setUser, setHasToken } = useGlobalContext();

  const resetForm = () => {
    setErrors(initialErrors);
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setRePassword("");
    setIsChecked(false);
    setIsPasswordVisible(false);
    setIsRePasswordVisible(false);
  };

  const handleForgotPassword = () => {
    // setIsLoading(true);
    // globalServices.post("/forgot-password", { email, redirect_url: window.location.origin })
    // .then((res) => {
    //   if(res.status === 200){
    //     Swal.fire({
    //       title: "Reset password link sent to your mail",
    //       icon: 'success',
    //       showConfirmButton: false,
    //       timer: 1500
    //     })
    //     resetForm();
    //     onClose();
    //     setIsForgot(false);
    //   }
    //   setIsLoading(false);
    // })
    // .catch((err) => {
    //   if (err.status === 422) {
    //     if (err.response.data.errors) {
    //       setErrors((errors) => ({ ...errors, ...err.response.data.errors }));
    //     }
    //   }
    //   setIsLoading(false);
    // });
  }

  const handleLogin = () => {
    // globalServices.post("/login", { email, password })
    // .then((res) => {
    //   if (res.status === 200) {
    //     resetForm();
    //     onClose();
    //     localStorage.setItem('token', res.data.data.token);
    //     setUser(res.data.data.user);
    //     if(!res.data.data.user.customer_meta_filled){
    //       onMetaOpen();
    //     }
    //     setHasToken(true);
    //     Swal.fire({
    //       title: 'Login Successfully!',
    //       icon: 'success',
    //       showConfirmButton: false,
    //       timer: 1500
    //     })
    //   }
    //   setIsLoading(false);
    // })
    // .catch((err) => {
    //   if (err.status === 422) {
    //     if (err.response.data.errors) {
    //       setErrors((errors) => ({ ...errors, ...err.response.data.errors }));
    //     }
    //   }
    //   setIsLoading(false);
    // });
  };

  const handleSignup = () => {
    // setIsLoading(true);
    // globalServices
    //   .post("/register", { name, email, phone, password, password_confirmation: rePassword })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       resetForm();
    //       onClose();
    //       localStorage.setItem('token', res.data.data.token);
    //       setUser(res.data.data.user);
    //       if(!res.data.data.user.customer_meta_filled){
    //         onMetaOpen();
    //       }
    //       setHasToken(true);
    //       Swal.fire({
    //         title: 'Registered Successfully!',
    //         icon: 'success',
    //         showConfirmButton: false,
    //         timer: 1500
    //       })
    //     }
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     if (err.status === 422) {
    //       if (err.response.data.errors) {
    //         setErrors((errors) => ({ ...errors, ...err.response.data.errors }));
    //       }
    //     }
    //     setIsLoading(false);
    //   });
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    if (password.length < 10) {
      return "The password must be at least 10 characters long.";
    } else if (!password.match(passwordRegex)) {
      return "The password must contain at least one uppercase letter, one number, and one special character.";
    } else {
      return "";
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
      return "Please enter valid email";
    } else {
      return "";
    }
  };

  const handleValidate = () => {
    const error = {
      name: !isForgot && !isLogin && name.trim().length === 0 ? "The name field is required" : "",
      email:
        email.trim().length === 0
          ? "The email field is required"
          : validateEmail(),
      phone: (isForgot || isLogin) ? "" : phone.trim().length === 0 ? "The phone field is required" : phone.trim().length !== 10 ? 'Phone numberThe phone number must be exactly 10 digits.' : '',
      password: isForgot ? "" :
        password.trim().length === 0
          ? "The password field is required"
          : validatePassword(),
      rePassword:
        !isForgot && !isLogin && password.trim().length > 0 && password !== rePassword
          ? "Retype password does not match with password"
          : "",
      checked: isForgot || isLogin || isChecked ? '' : "Term & condition is required",
    };
    setErrors(error);
    return !Object.values(error).some((value) => value !== "");
  };

  const submitForm = () => {
    const validate = handleValidate();
    if (!validate) return;
    if (isForgot){
      handleForgotPassword();
    } else if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  useEffect(() => {
    resetForm();
  }, [isLogin, isForgot, String(isOpen)]);

  const removeError = (
    name: "name" | "checked" | "password" | "rePassword" | "phone" | "email"
  ) => {
    if (errors[name]) {
      setErrors((err) => ({ ...err, [name]: "" }));
    }
  };

  const handleKey = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitForm();
    }
  }

  return (
    <Modal
      className="w-[100%] max-w-[800px]"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {() => (
          <ModalBody className="flex-row p-0 gap-0">
            <div className="max-w-[368px] relative flex-shrink-[0] w-[60%]">
              <div className="absolute top-[45px] left-[30px] right-[30px] text-center text-[26px] leading-[36px] font-semibold">Welcome to Your Real Estate Website</div>
              <img
                src="/images/login.jpg"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="login"
              />
            </div>
            <div className={styles.rightBodyContent}>
              <p className="text-[26px] leading-[36px] font-semibold mb-[22px]">
                {isForgot ? "Reset your password" : isLogin ? "Sign into your account" : "Create an account"}
              </p>
              <div
                className={`flex flex-col gap-[15px] mb-[22px] ${styles.form}`}
                onKeyDown={handleKey}
              >
                {!isForgot && !isLogin && (
                  <Input
                    classNames={inputClass}
                    className={`${styles.formInput}`}
                    variant="bordered"
                    placeholder="Name"
                    value={name}
                    onValueChange={(value) => {
                      setName(value);
                      removeError("name");
                    }}
                    isInvalid={!!errors.name}
                    errorMessage={errors.name}
                  />
                )}
                <Input
                  classNames={inputClass}
                  className={styles.formInput}
                  variant="bordered"
                  placeholder="Email"
                  value={email}
                  type="email"
                  onValueChange={(value) => {
                    setEmail(value);
                    removeError("email");
                  }}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email}
                />
                {!isForgot &&  !isLogin && (
                  <Input
                    classNames={inputClass}
                    className={styles.formInput}
                    variant="bordered"
                    placeholder="Phone Number"
                    value={phone}
                    type="tel"
                    isInvalid={!!errors.phone}
                    onValueChange={(value) => {
                      if(value === '' || value.match(/^[1-9][0-9]*$/)){
                        setPhone(value);
                        removeError("phone");
                      }
                    }}
                    errorMessage={errors.phone}
                  />
                )}
                {!isForgot && <Input
                  classNames={inputClass}
                  className={styles.formInput}
                  variant="bordered"
                  placeholder="Password"
                  value={password}
                  onValueChange={(value) => {
                    setPassword(value);
                    removeError("password");
                  }}
                  type={isPasswordVisible ? "text" : "password"}
                  isInvalid={!!errors.password}
                  errorMessage={errors.password}
                  endContent={<button className="mx-[6px]" onClick={() => setIsPasswordVisible(visible => !visible)}>{isPasswordVisible ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}</button>}
                />}
                {!isForgot && !isLogin && (
                  <Input
                    classNames={inputClass}
                    className={styles.formInput}
                    variant="bordered"
                    placeholder="Retype Password"
                    value={rePassword}
                    onValueChange={(value) => {
                      setRePassword(value);
                      removeError("rePassword");
                    }}
                    type={isRePasswordVisible ? "text" : "password"}
                    isInvalid={!!errors.rePassword}
                    errorMessage={errors.rePassword}
                    endContent={<button className="mx-[6px]" onClick={() => setIsRePasswordVisible(visible => !visible)}>{isRePasswordVisible ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}</button>}
                  />
                )}
                {!isForgot && <div className="flex justify-between items-center text-[14px]">
                  {!isLogin && <Checkbox
                    isInvalid={!!errors.checked}
                    isSelected={isChecked}
                    onValueChange={(value) => {
                      setIsChecked(value);
                      removeError("checked");
                    }}
                    classNames={{
                      wrapper:
                        "after:bg-black after:text-white group-data-[selected=true]:border-black",
                    }}
                  >
                    I agree with terms & conditions
                  </Checkbox>}
                  {isLogin && <Button className="!bg-transparent hover:text-[#e7c873]" variant="light" onPress={() => setIsForgot(true)}>Lost your password?</Button>}
                </div>}
              </div>
              <Button
                onPress={submitForm}
                
                className="mb-[22px] idx-button h-[54px] !w-full"
              >
                {isForgot ? "Reset Password" : isLogin ? "Login" : "Register"}
              </Button>
              <div className="flex justify-center">
                <p>
                  {isForgot ? "" : isLogin ? "Not a member" : "Have an account"}{!isForgot && "?"}{" "}
                  <span
                    className={styles.loginLinkText}
                    onClick={() => {
                      if(isForgot){
                        setIsForgot(false);
                      }else{
                        setIsLogin((login) => !login);
                      }
                    }}
                  >
                    {isLogin && !isForgot ? "Register here" : "Log in"}
                  </span>
                </p>
              </div>
            </div>
            <div></div>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}
