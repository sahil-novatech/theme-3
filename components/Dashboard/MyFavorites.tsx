
'use client';
import FavoriteProperty from "../Homepage/FavoriteProperty";

export default function MyFavorites() {
  return (
    <div>
      <div className="mt-[31px] mb-[5px] text-[26px] leading-[36px] font-semibold">
        My Favorites
      </div>
      <div className="text-[#3d3e3f] mb-[33px]">
        We are glad to see you again!
      </div>
      <FavoriteProperty />
    </div>
  )
}