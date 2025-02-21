import ProfilePic from "../assets/imgs/Home/Profile_pic.jpg";
const Avatar = () => {
  return (
    <>
      <div className="mt-10 overflow-hidden rounded-full">
        <img src={ProfilePic} alt="Profile Pic" className="w-38 h-38   " />
      </div>
      <div className="mt-[30px] text-center">
        <h1 className="text-2xl mb-2 font-bold">Mina Nadi</h1>
        <p className="uppercase font-mono mb-6 text-xs font-normal text-gray-400 ">
          <span className="nav-span-color">Frontend Developer</span> in Egypt
        </p>
      </div>
    </>
  );
};

export default Avatar;
