import Image from "next/image";
import Tracker from "./tracker";

type UserWallet = {
  img?: string;
  username: string;
  role: string;
  name: string;
  id: string;
  repositories: number | string;
  stars: number | string;
  followers: number | string;
  following: number | string;
  location: string;
  qrcode?: undefined | React.ReactNode;
};

export default function Wallet({
  img = "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  username = "97revenge",
  role = "Developer",
  name = "Matheus Pereira",
  id = "#854465A757B",
  repositories = 15,
  stars = 104,
  followers = 18,
  following = 50,
  location = " Sao Paulo, BR",
  qrcode = "https://file.rendit.io/n/XhUz2uDrlceuTryQP3Y0.png",
}: UserWallet) {
  return (
    <>
      <div className="container noselect ">
        <div className="canvas">
          <Tracker />
          <div id="card">
            <div
              id="DivrelativeRoot"
              className="flex flex-row w-full items-start"
            >
              <div
                id="Divoverflowhidden"
                className="shadow-[0px_4px_7px_1px_rgba(0,_0,_0,_0.14),_0px_3px_9px_2px_rgba(0,_0,_0,_0.12),_0px_4px_4px_-3px_rgba(0,_0,_0,_0.2)] bg-white/0 flex flex-row w-full items-start rounded-[24px]"
              >
                <div
                  id="Divrelative3"
                  className="shadow-[inset_0px_0px_0px_1px_rgba(255,_255,_255,_0.2)] bg-[#858991] flex flex-col justify-end pt-4 gap-5 w-full font-['Roboto_Flex'] items-start rounded-3xl"
                >
                  <div className="flex flex-col gap-3 w-full items-start">
                    <div className="flex flex-row gap-1 w-5/6 items-start mb-px ml-3">
                      <div
                        id="Divrelative"
                        className="bg-white/87 flex flex-row w-6 items-start rounded-[24px] m-1 bg-gray-500"
                      >
                        <Image
                          src={img}
                          alt="Profile Icon"
                          width={25}
                          height={10}
                          className="rounded-full align-baseline mt-0.5 bg-"
                        />
                      </div>
                      <div className="text-lg font-semibold text-white mt-1  font-sans">
                        {username}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full items-start px-2 ">
                      <div className="flex flex-col ml-3 gap-1  font-sans items-start  w-[80%] pr-2  ">
                        <div className=" font-semibold text-white text-lg">
                          {role}
                        </div>
                        <div className="text-2xl font-bold text-white">
                          {name}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col px-6 font-sans items-start border-b-2 w-full border-gray-400 ">
                      <div className="flex flex-row justify-between w-full items-start">
                        <div className="text-xs font-extrabold text-white font-sans ">
                          ID
                        </div>
                      </div>
                      <div className="flex flex-row justify-between w-full items-start">
                        <div className="text-xs font-extrabold text-white font-sans ">
                          {id}
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col px-6 font-sans items-start border-b-2 w-full border-gray-400 ">
                      <div className="flex flex-row justify-between w-full items-start">
                        <div className="text-xs font-extrabold text-white font-sans ">
                          Repositories
                        </div>
                        <div className="text-xs font-extrabold text-white font-sans">
                          Stars
                        </div>
                      </div>
                      <div className="flex flex-row justify-between w-full items-start">
                        <div className="text-xs font-extrabold text-white font-sans ">
                          {repositories}
                        </div>
                        <div className="text-xs font-extrabold text-white font-sans">
                          {stars}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col px-6 font-sans items-start border-b-2 w-full border-gray-400 ">
                      <div className="flex flex-row justify-between w-full items-start">
                        <div className="text-xs font-extrabold text-white font-sans ">
                          Followers
                        </div>
                        <div className="text-xs font-extrabold text-white font-sans">
                          Following
                        </div>
                      </div>
                      <div className="flex flex-row justify-between w-full items-start">
                        <div className="text-xs font-extrabold text-white font-sans ">
                          {followers}
                        </div>
                        <div className="text-xs font-extrabold text-white font-sans">
                          {following}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col px-6 font-sans items-start  w-full  ">
                      <div className="flex flex-row justify-between w-full items-start">
                        <div className="text-xs font-extrabold text-white font-sans ">
                          Location
                        </div>
                      </div>
                      <div className="flex flex-row justify-between w-full items-start">
                        <div className="text-xs font-extrabold text-white font-sans ">
                          {location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="Divrelative2"
                    className="bg-white flex flex-row justify-center ml-16 pt-3 w-1/2 items-start rounded-lg"
                  >
                    {qrcode}
                  </div>
                  <div className="w-full  h-20 relative bg-stone-300 bg-opacity-0 rounded-xl rounded-br-3xl flex-col justify-start items-start inline-flex rouded-b-3xl">
                    <div className="w-full h-8 bg-white flex items-center justify-center ">
                      <Image
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        height={15}
                        alt="github icon"
                        width={20}
                      />
                    </div>

                    <div className="w-[100%] h-[100%] relative bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 rounded-b-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
