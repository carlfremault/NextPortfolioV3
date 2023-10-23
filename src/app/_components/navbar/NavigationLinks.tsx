import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLinks() {
  const pathName = usePathname();

  const navLinks = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "work",
      href: "/work",
    },
    {
      name: "stack",
      href: "/stack",
    },
    {
      name: "about",
      href: "/about",
    },
  ];

  return navLinks.map((link) => (
    <li key={link.name}>
      <Link
        href={link.href}
        className={link.href === pathName ? "font-bold text-orange-500" : ""}
      >
        {link.name}
      </Link>
    </li>
  ));
}
