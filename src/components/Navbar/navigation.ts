import { JwtPayload } from "jwt-decode";

import authService from "services/auth.service";

export type NavLink = {
  name: string;
  to?: string;
  onClick?: () => Promise<boolean>;
};

type Navigation = {
  brand: NavLink;
  links: NavLink[];
};

export const getNavigation = (user: JwtPayload | null): Navigation => {
  const links: NavLink[] = [];

  if (user) {
    links.push({
      name: "Logout",
      onClick: authService.logout,
      to: "/login",
    });
    links.push({ name: "My recipes", to: "/my-recipes" });
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
