import { GetServerSideProps } from "next";

// export default function Index({ user }: { user: any }) {
//   return (
//     <>
//       <div className="w-[10%]">ok</div>
//     </>
//   );
// }

import { useRouter } from "next/router";
import { useState } from "react";

// Your component
export default function Index() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    // Use the router object to navigate to a new URL with the query parameter
    router.push({
      pathname: "/user", // Update with the correct pathname
      query: { username },
    });
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search </button>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const username = query.username;
//   const response = await fetch(`https://api.github.com/users/${username}`);
//   const data = await response.json();

//   return {
//     props: {
//       user: data,
//     },
//   };
// };
