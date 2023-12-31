import { GetServerSideProps } from "next";
import React from "react";

import Link from "next/link";

export default function User({ user, request }: { user: any; request: any }) {
  const { login, url, location } = user;

  return (
    <>
      {request == "200" ? (
        <>
          <div>{login}</div>
          <div>{url}</div>
          <div>{location}</div>
          <Link href={{ pathname: "/repos", query: { username: login } }}>
            Repos
          </Link>
        </>
      ) : (
        <>voce está com o login errado</>
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
