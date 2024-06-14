import { Link } from "@tanstack/react-router";

export default function Overview() {
  return (
    <div className="lg:w-2/3 mt-32 text-center mx-auto">
      <h1 className="text-gray-900 uppercase text-5xl md:text-6xl xl:text-7xl">
        $GameB Index
      </h1>
      <p className="mt-8 text-gray-700 font-mono text-xl">
        The Crypto Index token: Empowering land based communities and investing
        in our regenerative future.
      </p>
      <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
        <Link
          to="/buy"
          className="relative flex h-16 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-md before:bg-black before:transition before:duration-300 active:duration-75 active:before:scale-95 sm:w-max"
        >
          <span className="relative font-mono text-base font-semibold text-white">
            Are you ready to change the game?
          </span>
        </Link>
      </div>
    </div>
  );
}
