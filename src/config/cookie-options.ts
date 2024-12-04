export const COOKIE_OPTIONS = {
  path: "/",
  secure: true,
  sameSite: "strict" as const,
  maxAge: 604800, // 7 day
};
