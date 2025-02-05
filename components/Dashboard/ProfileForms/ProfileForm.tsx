"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { globalServices } from "@/services/global.services";
import { UserProfile } from "@/src/types/user";
import { Button, Input } from "@nextui-org/react";
import { ChangeEvent, useEffect, useState } from "react";
import { 
  // MdDelete,
  MdUpload 
} from "react-icons/md";
import Swal from "sweetalert2";

const inputClass = { input: "h-[54px] px-[6px]", inputWrapper: "h-[54px]" };
// const selectClass = { innerWrapper: "px-[6px]", trigger: "h-[54px]" }
// const textAreaClass = { input: "py-[6px] px-[6px]", inputWrapper: "py-[6px]" };

// const countries = ['India', 'Canada', 'USA'];

type Props = {
  userData: UserProfile;
}

export default function ProfileForm({ userData }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    // description: "",
    // web: "",
    phone: "",
    // country: "",
    // friendly_address: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    // description: "",
    // web: "",
    phone: "",
    // country: "",
    // friendly_address: ""
  });

  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<string | File>('');
  const { setUser } = useGlobalContext();

  useEffect(() => {
    if(userData?.avatar){
      setImageUrl(userData.avatar)
    }
    const initForm = {...formData};
    if(userData?.name){
      initForm.name = userData.name;
    }
    // if(userData?.country){
    //   initForm.web = userData.country;
    // }
    // if(userData?.description){
    //   initForm.description = userData.description;
    // }
    if(userData?.phone){
      initForm.phone = userData.phone;
    }
    // if(userData?.location?.friendly_address){
    //   initForm.friendly_address = userData.location.friendly_address;
    // }
    setFormData((form) => ({ ...form, ...initForm}));
  }, [userData])

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file constraints
      if (file.size > 1024 * 1024) {
        alert("Max file size is 1MB");
        return;
      }

      // const img = new Image();
      // img.src = URL.createObjectURL(file);
      // img.onload = () => {
      //   if (img.width < 330 || img.height < 300) {
      //     alert("Minimum dimensions are 330x300.");
      //     return;
      //   }
        setImage(URL.createObjectURL(file));
        setImageFile(file);
      // };
    }
  };

  // const handleDelete = () => {
  //   setImage(null);
  // };

  const handleValue = (
    name:
      | "name"
      // | "description"
      // | "web"
      | "phone",
      // | "country"
      // | "friendly_address",
    value: string,
    type: string = 'text'
  ) => {
    if(type === 'number' && !(value === '' || value.match(/^[1-9][0-9]*$/))) return;
    if(type === 'float' && !(value === '' || value === '-' || (value.endsWith(".") && (value.match(/\./g) || []).length <= 1) || value.match(/^[-+]?\d*\.?\d+$/))) return;
    setFormData((form) => ({ ...form, [name]: value }));
    if (errors[name]) {
      setErrors((err) => ({ ...err, [name]: "" }));
    }
  };

  const handleProfile = () => {
    if(formData.phone && !(formData.phone.length === 10)){
      setErrors(err => ({ ...err, phone: 'Enter valid phone number'}));
      return;
    }
    globalServices.update('/update-profile',
      Object.fromEntries(
        Object.entries(formData).filter(([, value]) => value.trim().length > 0)
      )
    ).then((res) => {
      if(res.status === 200) {
        Swal.fire({
          title: 'Profile updated successfully',
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
    })

    if(imageFile){
      const imageForm = new FormData();
      imageForm.append('avatar', imageFile);
      globalServices.post('/update-avatar', imageForm)
      .then((res) => {
        setImageFile('');
        const avatarLink = res.data?.data?.user?.avatar;
        if(avatarLink){
          setImageUrl(avatarLink);
          setUser((user) => user ? ({...user, avatar: avatarLink }) : null);
        }else{
          setUser((user) => (user ? { ...user, avatar: String(image) } : null));
        }
      })
      .catch((err) => {
        if (err.status === 422) {
          if (err.response.data.errors) {
            setErrors((errors) => ({ ...errors, ...err.response.data.errors }));
          }
        }
      })
    }
  }

  return (
    <div className="flex flex-col gap-6 mt-4">

      <div className="flex items-center gap-6">
        <div className="relative">
          {image || imageUrl ? (
            <img
              src={image || imageUrl}
              alt="Uploaded"
              className="w-32 h-32 rounded-full object-cover"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
          {/* {image && (
            <button
              onClick={handleDelete}
              className="absolute top-0 right-0 bg-white p-1 rounded-full shadow-md"
            >
              <MdDelete className="text-red-500" size={20} />
            </button>
          )} */}
        </div>
        <div>
          <label htmlFor="upload" className="w-[fit-content] mb-3 flex items-center gap-2 px-6 py-2 border border-[#e7c873] rounded-lg cursor-pointer">
            <span className="text-[14px]">Upload Image</span>
            <MdUpload size={18} />
            <input
              id="upload"
              type="file"
              accept=".jpg,.png"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
          <p className="text-sm text-gray-500 text-center">
            Max file size is 1MB, Minimum dimension: 330x300, and Suitable files are
            .jpg & .png.
          </p>
        </div>
      </div>

      <div className="flex w-full items-start flex-wrap md:flex-nowrap gap-6">
        <Input
          classNames={inputClass}
          value={formData.name}
          onValueChange={(value) => handleValue("name", value)}
          variant="bordered"
          placeholder="Name"
          type="text"
          errorMessage={errors.name}
          isInvalid={!!errors.name}
        />
      </div>
      {/* <Textarea
        classNames={textAreaClass}
        value={formData.description}
        onValueChange={(value) => handleValue("description", value)}
        variant="bordered"
        placeholder="Description"
        type="text"
        errorMessage={errors.description}
        isInvalid={!!errors.description}
      /> */}
      <div className="flex w-full items-start flex-wrap md:flex-nowrap gap-6">
        <Input
          classNames={inputClass}
          value={formData.phone}
          onValueChange={(value) => handleValue("phone", value, 'number')}
          variant="bordered"
          placeholder="Phone"
          type="text"
          errorMessage={errors.phone}
          isInvalid={!!errors.phone}
        />
        {/* <Input
          classNames={inputClass}
          value={formData.web}
          onValueChange={(value) => handleValue("web", value)}
          variant="bordered"
          placeholder="Web"
          type="text"
          errorMessage={errors.web}
          isInvalid={!!errors.web}
        /> */}
      </div>
      <Input
        classNames={inputClass}
        value={userData.email ?? ""}
        // onValueChange={(value) => handleValue("phone", value, 'number')}
        variant="bordered"
        placeholder="Email"
        type="text"
        isDisabled
        // errorMessage={errors.email}
        // isInvalid={!!errors.email}
      />
      {/* <Select classNames={selectClass} placeholder="Select Country" variant="bordered" value={formData.country ?? undefined} onChange={(event) => handleValue("country", event.target.value)}>
        {countries.map((country) => 
          <SelectItem key={country} value={country}>{country}</SelectItem>)
        }
      </Select> */}
      {/* <div className="flex w-full items-start flex-wrap md:flex-nowrap gap-6"> */}
        {/* <Input
          classNames={inputClass}
          value={formData.friendly_address}
          onValueChange={(value) => handleValue("friendly_address", value)}
          variant="bordered"
          placeholder="Friendly Address"
          type="text"
          errorMessage={errors.friendly_address}
          isInvalid={!!errors.friendly_address}
        /> */}
      {/* </div> */}
      {/* <iframe
        src={`https://www.google.com/maps/embed/v1/view?key=${process.env.NEXT_PUBLIC_MAP_KEY}&center=${formData.latitude || 0},${formData.longitude || 0}`}
        title="google map"
        height={400}
        style={{ border: 0, width: "100%" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="flex w-full items-start flex-wrap md:flex-nowrap gap-6">
        <Input
          classNames={inputClass}
          value={formData.latitude}
          onValueChange={(value) => handleValue("latitude", value, 'float')}
          variant="bordered"
          placeholder="Latitude"
          type="text"
          errorMessage={errors.latitude}
          isInvalid={!!errors.latitude}
        />
        <Input
          classNames={inputClass}
          value={formData.longitude}
          onValueChange={(value) => handleValue("longitude", value, 'float')}
          variant="bordered"
          placeholder="Longitude"
          type="text"
          errorMessage={errors.longitude}
          isInvalid={!!errors.longitude}
        />
      </div> */}
      <Button onPress={handleProfile} className="idx-button mt-3">
        Save Profile
      </Button>
    </div>
  );
}
