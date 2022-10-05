import React, { useEffect } from "react";
import { FC, useState } from "react";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";
import Image from "next/image";
import { BuiltInProviderType } from "next-auth/providers";

const LoginWithGoogle: FC = () => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>();

  useEffect(() => {
    const setTheProviders = async () => {
      const setUpProviders = await getProviders();
      setProviders(setUpProviders);
    };
    setTheProviders();
  }, []);
  return (
    <a
      className="text-lg bg-[#f3fff7] text-black p-2 rounded-md px-5 font-dm font-medium text-center cursor-pointer flex items-center justify-center gap-4"
      onClick={() =>
        signIn(providers.google.id, {
          callbackUrl: `${window.location.origin}`,
        })
      }
    >
      <Image
        alt="Google Logo"
        src="/assets/logos/googleLogo.png"
        width={20}
        height={20}
      />{" "}
      Login with Google
    </a>
  );
};

export default LoginWithGoogle;
