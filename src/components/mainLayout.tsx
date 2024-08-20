import { Taskbar } from "./taskbar";
import Wallpaper from "../assets/wallpaper.jpg";
import { Desktop } from "./desktop";

export function MainLayout() {
  return (
    <main
      className="relative w-screen h-screen bg-fixed bg-cover p-0 m-0"
      style={{ backgroundImage: `url(${Wallpaper})` }}
    >
        <Desktop />
        <Taskbar />
    </main>
  );
}
