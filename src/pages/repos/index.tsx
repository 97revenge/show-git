import { GetServerSideProps } from "next";
import Link from "next/link";

export default function Repos({ repos }: { repos: any[] }) {
  const value: Array<any> = repos;
  return (
    <>
      <div>
        {value.map((item) => {
          const { name } = item;
          return (
            <>
              <div className="flex flex-col gap-12">
                <div className="p-2 border-b-2">
                  <div>{name}</div>
                  <div>{JSON.stringify(item.url)}</div>
                  <div>{JSON.stringify(item.description)}</div>
                  <Link
                    href={{
                      pathname: "/info",
                      query: { repo: name },
                    }}
                  >
                    Show Repo
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: {
  query: any;
}) => {
  const username = query.username;
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const data = await response.json();

  return {
    props: {
      repos: data,
    },
  };
};
