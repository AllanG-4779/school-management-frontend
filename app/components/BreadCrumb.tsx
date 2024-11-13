import Link from "next/link";
import React from "react";

const BreadCrumb: React.FC<BreadCrumbProps> = ({ links }) => {
  return (
    <nav className="text-sm flex gap-2 items-center p-2">
      {/* <!-- Breadcrumb --> */}
      {links.map((each) => (
        <Link href={each.href} key={each.name}>
          {each.name}
        </Link>
      ))}
    </nav>
  );
};

export default BreadCrumb;

type BreadCrumbProps = {
  links: { name: string; href: string }[];
};
