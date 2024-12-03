export type Link = {
  name: string;
  to: string;
};

export type Navigation = {
  links: Link[];
};

export const navigation = {
  links: [
    { name: "About", to: "/about" },
    { name: "Contacts", to: "/contacts" },
    { name: "Recipes", to: "/" },
  ],
};
