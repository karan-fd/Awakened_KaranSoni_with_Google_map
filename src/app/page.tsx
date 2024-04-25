'use client';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();
  return (
    <section className="home--section">
      <div className="container">
        <div id="wrapper" className="grid grid-cols-1 xl:h-screen xl:grid-cols-2">
          <div id="col-1" className="rounded-3xl bg-blue-900 px-12 pb-40 pt-32 md:px-32 xl:px-32 xl:py-64">
            <h1 className="text-4xl font-extrabold text-blue-500 md:text-6xl">
              Find <br />
              Resturants <br />
              Nearby
            </h1>
            <p className="text-normal pt-3 font-medium text-white md:pt-6 md:text-3xl">Lorem ipsum dolor sit amet.</p>
            {session?.user ? (
              <>
                <Link
                  href="/resturants"
                  className="mt-8 inline-block rounded-lg bg-white px-5 py-3 text-center text-lg font-semibold uppercase text-blue-600"
                >
                  Find Resturants
                </Link>
              </>
            ) : (
              <button
                className="mt-8 inline-block rounded-lg bg-white px-5 py-3 text-center text-lg font-semibold uppercase text-blue-600"
                onClick={() => signIn()}
                aria-label="Sign In"
              >
                Sign In
              </button>
            )}
          </div>
          <div id="col-2" className="px-3 md:px-20 xl:px-12 xl:py-64">
            <div className="-mt-6 grid grid-cols-[auto_1fr] items-center gap-4 rounded-lg border bg-white px-6 py-5 md:gap-12 md:px-16 md:py-8 xl:-ml-24 xl:rounded-xl xl:pl-8">
              <div id="circle" className="h-16 max-h-16 w-16 max-w-16 rounded-full bg-blue-500 md:h-16 md:w-16"></div>
              <p className="text-base font-semibold md:text-2xl">“Feeling Hunggry! Want to know best place?”</p>
            </div>

            <div
              id="cards"
              className="mt-6 grid grid-cols-[auto_1fr] items-center gap-4 rounded-lg border bg-white px-6 py-5 md:mt-12 md:gap-12 md:px-16 md:py-8 xl:rounded-xl xl:pl-8"
            >
              <div id="circle" className="h-16 max-h-16 w-16 max-w-16 rounded-full bg-blue-500 md:h-16 md:w-16"></div>
              <p className="text-base font-semibold md:text-2xl">“Find best place in your neighbourhood!”</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
