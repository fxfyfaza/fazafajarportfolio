import { FocusCards } from "../components/ui/focus-card";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "laravel",
      src: "../img/laravel.svg",
    },
    {
        title: "JS",
        src: "../img/JS.svg",
    },
    {
      title: "C++",
      src: "../img/CPlusPlus.svg",
    },
    {
        title: "C",
        src: "../img/c.svg",
    },
    {
        title: "git",
        src: "../img/git.svg",
    },
    {
        title: "PHP",
        src: "../img/PHP.svg",
      },
    {
      title: "Python",
      src: "../img/Python.svg",
    },
    {
      title: "TS",
      src: "../img/typescript.svg",
    },
    {
      title: "React",
      src: "../img/react.svg",
    },
    {
      title: "VSCode",
      src: "../img/vscode.svg",
    },
  ];

  return <FocusCards cards={cards} />;
}
