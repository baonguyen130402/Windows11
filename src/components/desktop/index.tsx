import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { swap } from "@formkit/drag-and-drop";

import { Icons } from "../../lib/icons";
import { Icon } from "./icon";

const IconsArr = [
  {
    title: "Folder",
    icon: <Icons.folder className="size-12 justify-self-center" />,
  },
  {
    title: "Firefox",
    icon: <Icons.firefox className="size-11 justify-self-center" />,
  },
  {
    title: "Edge",
    icon: <Icons.msEdge className="size-12 justify-self-center" />,
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  },
  {
    title: "",
    icon: "",
  }
];

export function Desktop() {
  const [parent, icons] = useDragAndDrop<HTMLUListElement, any>(IconsArr, {
    group: "parent",
    plugins: [swap()],
  });

  return (
    <ul
      className="w-screen h-[calc(100%-3rem)] bg-transparent p-2.5 grid grid-rows-9 grid-cols-18 gap-y-8 gap-x-2.5"
      ref={parent}
    >
      {icons.map((icon: any, id: number) => (
        <Icon key={id} title={icon.title} icon={icon.icon} rowId={id} />
      ))}
    </ul>
  );
}
