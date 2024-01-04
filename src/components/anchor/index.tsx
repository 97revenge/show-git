export default function Anchor({
  children,
  title,
  or,
}: {
  children: React.ReactNode;
  title: string;
  or: string;
}) {
  return (
    <>
      <div className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <div className="p-4 md:p-5">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="group-hover:text-gray-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                {title}
              </h3>
              <div className="text-sm text-gray-500">
                <div className="flex flex-row w-full hover:bg-gray-500/50 gap-x-1">
                  {children}
                  {or}
                </div>
              </div>
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
      </div>
    </>
  );
}
