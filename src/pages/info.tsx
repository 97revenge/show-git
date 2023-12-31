import { GetServerSideProps } from "next";

export default function Info({ repo }: { repo: any }) {
  const { id, name, url, description } = repo;

  return (
    <>
      <div className="p-4 border-4 bg-gray-200/20">
        <div>{JSON.stringify(id)}</div>
        <div>{JSON.stringify(name)}</div>
        <div>{JSON.stringify(url)}</div>
        <div>{JSON.stringify(description)}</div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const repo = query.repo;

  const response = await fetch(
    `https://api.github.com/repos/97revenge/${repo}`
  );

  const data = await response.json();

  return {
    props: {
      repo: data,
    },
  };
};
