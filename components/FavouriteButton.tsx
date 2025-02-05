import { globalServices } from "@/services/global.services";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineLoading3Quarters } from "react-icons/ai";

interface FavouriteButtonProps {
  isFavorite: boolean;
  listingKey: string;
  isHover?: boolean;
  isAbsolute?: boolean;
}

export default function FavouriteButton({ isFavorite, isAbsolute = false, listingKey, isHover = true } : FavouriteButtonProps) {
  const [isFavourite, setIsFavourite] = useState(isFavorite);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsFavourite(isFavorite);
  }, [isFavorite])

  const handleClick = () => {
    setIsFavourite((prev) => !prev);
    setIsLoader(true);
    globalServices.post(`/customers/favorites/toggle`, {
      propertyListingKey: listingKey
    })
    .finally(() => {
      setIsLoader(false);
    })
  };

  return (
    (isFavourite || isHover) ?
    <Button
      disableRipple
      isIconOnly
      isDisabled={isLoader}
      radius="full"
      size="sm"
      onPress={handleClick}
      className={`${isAbsolute ? "absolute right-[10px] z-[1] top-[10px] bg-red-200" : "border border-[#e5e7eb] bg-transparent"} group transition-all active:scale-90`}
    >
      {isLoader ? <AiOutlineLoading3Quarters style={{ animation: "spin 1s linear infinite" }} />
      : isFavourite ? (
        <AiFillHeart className="text-[#ff1a1a] transition-all duration-300 animate-pulse" size={20} />
      ) : (
        <AiOutlineHeart className="text-gray-500 transition-all duration-300" size={20} />
      )}
    </Button>
    : null
  );
}