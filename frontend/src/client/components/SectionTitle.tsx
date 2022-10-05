import Link from "next/link";
import React from "react";
import { FC } from "react";

interface Props {
  title: string;
}

const SectionTitle: FC<Props> = ({ title }) => {
  return (
    <>
      <Link href="/">
        <h1 className="text-2xl font-bold font-poppins cursor-pointer">
          IIITD Forum
        </h1>
      </Link>
      <h2 className="text-5xl font-bold font-poppins">{title}</h2>
    </>
  );
};

export default SectionTitle;
