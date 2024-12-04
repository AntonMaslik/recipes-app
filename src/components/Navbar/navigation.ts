export type NavLink = {
  name: string;
  to: string;
};

type Navigation = {
  brand: NavLink;
  links: NavLink[];
};

export const navigation: Navigation = {
  brand: { name: "Recipes", to: "/" },
  links: [
    { name: "My recipes", to: "/my-recipes" },
    { name: "Login", to: "/sign-in" },
  ],
};
