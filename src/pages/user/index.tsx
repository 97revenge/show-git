import { GetServerSideProps } from "next";

import React from "react";

import Link from "next/link";

import Page from "@/components/404";
import Wallet from "@/components/wallet";
import QRCode from "react-qr-code";

export default function User({ user, request }: { user: any; request: any }) {
  const { login, url, location, name, id, followers, following, avatar_url } =
    user;

  return (
    <>
      {request == "200" ? (
        <>
          <div className="border-2 border-red-200">ok</div>
          <div className="w-auto h-[650px] flex flex-col  items-center     p-8    border-b-2 ">
            <Wallet
              img={avatar_url}
              username={String(`@${login}`)}
              role="Developer"
              name={name}
              id={String(`# ${id}`)}
              repositories={48}
              stars={24}
              followers={followers}
              following={following}
              location={location}
              qrcode={
                <QRCode
                  value={(String("https://github.com/") + login) as string}
                  viewBox={`0 0 256 256`}
                  className="w-auto h-auto py-2 px-2"
                />
              }
            />
          </div>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
              <a
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Management
                      </h3>
                      <p className="text-sm text-gray-500">4 job positions</p>
                    </div>
                    <div className="ps-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              <a
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        App Development
                      </h3>
                      <p className="text-sm text-gray-500">26 job positions</p>
                    </div>
                    <div className="ps-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              <a
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Arts & Entertainment
                      </h3>
                      <p className="text-sm text-gray-500">9 job positions</p>
                    </div>
                    <div className="ps-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              <a
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Accounting
                      </h3>
                      <p className="text-sm text-gray-500">11 job positions</p>
                    </div>
                    <div className="ps-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              <a
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        UI Designer
                      </h3>
                      <p className="text-sm text-gray-500">37 job positions</p>
                    </div>
                    <div className="ps-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              <a
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Apps
                      </h3>
                      <p className="text-sm text-gray-500">2 job positions</p>
                    </div>
                    <div className="ps-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              <a
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Content Writer
                      </h3>
                      <p className="text-sm text-gray-500">10 job positions</p>
                    </div>
                    <div className="ps-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>

              <a
                className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                        Analytics
                      </h3>
                      <p className="text-sm text-gray-500">14 job positions</p>
                    </div>
                    <div className="ps-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <Link href={{ pathname: "/repos", query: { username: login } }}>
            Repos
          </Link>
        </>
      ) : (
        <>
          <Page />
        </>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const instance = query?.username;
  const response = await fetch(`https://api.github.com/users/${instance}`);
  const newData = response.status;
  const data = await response.json();

  return {
    props: {
      user: data,
      request: newData,
    },
  };
};
