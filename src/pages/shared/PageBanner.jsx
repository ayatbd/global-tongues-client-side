import useTheme from "../../hooks/useTheme";
import "../../index.css";

const PagesBanner = ({ img, title }) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`h-[40vh] w-full overflow-hidden ${
        isDarkMode ? "bg-gray-500" : "banner-img"
      } pt-14 md:pt-40`}
    >
      <div className="max-container relative w-full h-full">
        <img
          className="absolute bottom-5 -right-14 md:-right-10"
          src={img}
          alt=""
        />
        <div className="text-center">
          <h1
            className={`text-3xl font-kanit font-extrabold ${
              isDarkMode ? "text-gray-100" : "text-red-700"
            }`}
          >
            {title}
          </h1>
          <p
            className={`font-bold text-lg font-kanit mt-3 ${
              isDarkMode ? "text-gray-300" : "text-black"
            }`}
          >
            Home {location.pathname}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagesBanner;
