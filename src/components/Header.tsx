'use client';
import React, { Fragment, useEffect } from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Menu } from '@headlessui/react';
import { useRouter } from 'next/navigation';

export const Header: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      router.push('/resturants');
      return;
    }
    if (!session?.user) {
      router.push('/');
      return;
    }
  }, [session]);

  return (
    <header className="header--section mb-10">
      <div className="container">
        <hgroup className="flex items-center justify-between py-4">
          <figure>
            <a href="/" title="Dash-n-Eat">
              <Image
                src="/dash-n-eat.png"
                width={80}
                height={80}
                alt="DashnEat"
                className="object-contain object-center"
              />
            </a>
          </figure>
          {session?.user && session.user ? (
            <>
              <Menu as="nav" className="relative">
                <Menu.Button>
                  <figure className="overflow-hidden rounded-full">
                    <Image
                      src={session.user?.image ? session.user.image : ''}
                      width={60}
                      height={60}
                      alt={session.user?.name ? session.user.name : 'Dash-n-Eat'}
                    />
                  </figure>
                </Menu.Button>
                <Menu.Items
                  as="ul"
                  className="absolute right-0 top-full w-max max-w-[250px] rounded-md bg-sky-100 p-4 leading-none"
                >
                  <Menu.Item as="li" className="mb-2 font-semibold text-gray-700">
                    {session.user?.name}
                  </Menu.Item>
                  <Menu.Item as="li" className="mb-2 font-semibold text-gray-700">
                    {session.user?.email}
                  </Menu.Item>
                  <Menu.Item
                    as="li"
                    className="mb-2 rounded bg-red-500 px-3 py-2 text-center font-semibold text-white last:mb-0 last:mt-4"
                  >
                    <button onClick={() => signOut()} aria-label="Sign Out">
                      Log Out
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </>
          ) : (
            <>
              <button
                className="rounded bg-green-500 px-3 py-2 text-center font-semibold text-white"
                onClick={() => signIn()}
                aria-label="Sign In"
              >
                Sign In
              </button>
            </>
          )}
        </hgroup>
      </div>
    </header>
  );
};
