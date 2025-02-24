"use client";

import { Router, useRouter } from "next/navigation";
import Dropdown from "./Dropdown";

export default function DropdownClient() {
  const router = useRouter();
  const handleHome = () => {
    router.push("/");
  };

  const handleAbout = () => {
    router.push("/about");
  };

  const handleProject = () => {
    router.push("/projects");
  };

  const handleUses = () => {
    router.push("/uses");
  };
  return <Dropdown onHome={handleHome} onAbout={handleAbout} onProject={handleProject} onUses={handleUses} />;
}
