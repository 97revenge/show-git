import { z } from "zod";
import { state } from "./state";

type State = z.infer<typeof state>;

export default function Header({
  children,
  state,
}: {
  children: React.ReactNode;
  state: State;
}) {
  return (
    <>
      <header className="bg-gray-50 border-[#e5e7eb] border-b-2">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between gap-4">
            <div className="">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Bem Vindo, {state.name}!
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                <a href={state.linker} className="hover:underline">
                  clique aqui para ver sua conta
                </a>
                🚀
              </p>
            </div>

            <div className="flex flex-row gap-x-2">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <label className="sr-only" htmlFor="search">
                    Search
                  </label>

                  <input
                    className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                    id="search"
                    type="search"
                    placeholder="Procure outro username"
                  />

                  <button
                    type="button"
                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                  >
                    <span className="sr-only">Search</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="block h-6 w-px rounded-full bg-gray-200 mt-2"
              ></span>
              <a href="#" className="block shrink-0">
                <span className="sr-only">Profile</span>
                {children}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
