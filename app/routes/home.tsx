import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React App Template" },
    { name: "description", content: "Welcome to React App" },
  ];
}

export default function Home() {
  return (
    <></>
  );
}
