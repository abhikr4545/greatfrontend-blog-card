/* eslint-disable jsx-a11y/img-redundant-alt */
import BlogImg from "../assets/blog-img.jpg";

export default function BlogCard() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#F9FAFB]">
      <div className="h-[504px] w-[340px] rounded-xl overflow-hidden">
        <div className="w-full h-[288px] overflow-hidden">
          <img src={BlogImg} className="bg-no-repeat bg-center bg-cover" alt="Image of Living Room" />
        </div>
        <div className="w-full h-[216px] bg-white py-6 px-2 flex flex-col gap-4">
          <div className="w-[67px] h-6 text-center border-solid border border-green-200 bg-green-50 text-green-700 text-sm rounded-3xl">
            Interior
          </div>
          <div className="font-semibold text-lg leading-7">
            Top 5 Living Room Inspirations
          </div>
          <div className="text-[#525252] leading-6 text-base font-medium">
            Curated vibrants colors for your living, make it pop & calm in the same time.
          </div>
          <div className="flex gap-3 text-indigo-700">
            <div>
              Read More
            </div>
            <div>
              {`->`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}