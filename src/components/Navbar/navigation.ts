import { User } from "types/user";

export type NavLink = {
  name: string;
  to: string;
};

type Navigation = {
  brand: NavLink;
  links: NavLink[];
};

export const getNavigation = (user: User | null): Navigation => {
  const links: NavLink[] = [];

  if (user) {
    links.push({ name: "My recipes", to: "/my-recipes" });
    links.push({ name: "Logout", to: "/logout" });
  } else {
    links.push({ name: "Login", to: "/login" });
  }

  return {
    brand: {
      name: "Recipes",
      to: "/",
    },
    links,
  };
};
