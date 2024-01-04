import Header from "@/components/header";
import Page from "@/components/404";
import Wallet from "@/components/wallet";
import Anchor from "@/components/anchor";

import Image from "next/image";
import Link from "next/link";

import QRCode from "react-qr-code";
import generatePDF, { Margin, Resolution, usePDF } from "react-to-pdf";

import { GetServerSideProps } from "next";

export default function User({
  user,
  request,
  repo,
  star,
}: {
  user: any;
  request: any;
  repo: Array<object>;
  star: Array<object>;
}) {
  "use client";

  const {
    login,
    url,
    location,
    name,
    id,
    followers,
    following,
    avatar_url,
    hireable,
  } = user;

  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  return (
    <>
      {request == "200" ? (
        <>
          <Header>
            <Image
              src={avatar_url}
              width={30}
              height={30}
              alt="profile icon"
              className="rounded-full align-baseline mt-1"
            />
          </Header>
          <button
            onClick={() =>
              generatePDF(targetRef, {
                method: "save",
                resolution: Resolution.HIGH,
                filename: "my-show-github-by-@97revenge",

                canvas: {
                  logging: true,
                },
                page: {
                  margin: {
                    right: 0,
                    bottom: 0,
                    top: 30,
                    left: 85,
                  },

                  // default is 'A4'
                  format: "letter",
                  // default is 'portrait'
                  orientation: "landscape",
                },
              })
            }
            className="bg-gray-100 text-center w-full hover:underline"
          >
            Download PDF
          </button>
          <div className="w-auto h-[650px] flex flex-col  items-center     p-8    border-b-2  bg-gradient-to-r from-gray-100 to-gray-300">
            {hireable == true ? (
              <span className="whitespace-nowrap rounded-full bg-lime-100 px-2.5 py-0.5 text-sm text-gray-800  mb-2 font-bold">
                Hireable
              </span>
            ) : (
              <>
                <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-gray-800  mb-2 font-bold">
                  Hired
                </span>
              </>
            )}
            <div
              className=" w-[370px] h-[800px] flex items-start py-1 justify-center bg-transparent "
              ref={targetRef}
            >
              <Wallet
                img={avatar_url}
                username={String(`@${login}`)}
                role="Developer"
                name={name}
                id={String(`# ${id}`)}
                repositories={repo.length}
                stars={star.length}
                followers={followers}
                following={following}
                location={location}
                qrcode={
                  <QRCode
                    value={String("https://github.com/" + login)}
                    viewBox={`0 0 256 256`}
                    className="flex justify-center items-center w-auto h-auto pb-2 px-2"
                  />
                }
              />
            </div>
          </div>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-[#f9fafb]">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
              <Anchor title="Repositories" or="created">
                <Link
                  href={{
                    pathname: "/repos",
                    query: { username: login },
                  }}
                >
                  <u>{repo.length}</u>
                  {repo.length === 30 && (
                    <>
                      <span> or more </span>
                    </>
                  )}
                </Link>
              </Anchor>
              <Anchor title="Repositories Starred" or="liked">
                <Link
                  href={{
                    pathname: "/repos",
                    query: { username: login },
                  }}
                >
                  <div className="flex flex-row w-full bg-gray-100 gap-x-1">
                    <u>{star.length}</u>
                    {star.length === 30 && (
                      <>
                        <span> or more </span>
                      </>
                    )}
                  </div>
                </Link>
              </Anchor>{" "}
              <Anchor title="Gists" or="liked">
                <Link
                  href={{
                    pathname: "/repos",
                    query: { username: login },
                  }}
                >
                  <div className="flex flex-row w-full bg-gray-100 gap-x-1">
                    <u>{star.length}</u>
                    {star.length === 30 && (
                      <>
                        <span> or more </span>
                      </>
                    )}
                  </div>
                </Link>
              </Anchor>{" "}
              <Anchor title="Subscriptions" or="liked">
                <Link
                  href={{
                    pathname: "/repos",
                    query: { username: login },
                  }}
                >
                  <div className="flex flex-row w-full bg-gray-100 gap-x-1">
                    <u>{star.length}</u>
                    {star.length === 30 && (
                      <>
                        <span> or more </span>
                      </>
                    )}
                  </div>
                </Link>
              </Anchor>
            </div>
          </div>
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
  const { username } = query;

  const response = await fetch(`https://api.github.com/users/${username}`);
  const status = response.status;
  const data = await response.json();

  const repo = await fetch(`https://api.github.com/users/${username}/repos`);
  const repodata = await repo.json();

  const star = await fetch(`https://api.github.com/users/${username}/starred`);
  const starData = await star.json();

  return {
    props: {
      user: data,
      request: status,
      repo: repodata,
      star: starData,
    },
  };
};
