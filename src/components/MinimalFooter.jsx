// install necessary libraries

import { FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { IoIosGitBranch } from "react-icons/io";
import { ThemeDropdown } from "./ThemeDropdown";

export const Footer = () => {
    return (
        <main className="flex min-h-12 w-full items-center border-t border-secondary font-mono">
            <div className="flex w-full flex-col items-center justify-center gap-2 py-5 md:py-0 md:flex-row md:justify-around">
                <div className="flex items-center gap-5">
                    <div>
                        <ThemeDropdown />
                    </div>

                    <div className="flex cursor-pointer items-center gap-1 rounded p-1 hover:bg-accent">
                        <IoIosGitBranch className="h-4 w-4 text-primary hover:text-neutral" />
                        <span className="text-sm">v0.0.1</span>
                    </div>
                </div>

                <div className="flex items-center text-xs text-secondary">
                    <p>Copyright © 2024 - All right reserved</p>
                </div>
                <div className="flex items-center gap-5 p-1">
                    <div>
                        <FaGithub className="icon-style" />
                    </div>
                    <div>
                        <FaEnvelope className="icon-style" />
                    </div>
                    <div>
                        <FaXTwitter className="icon-style" />
                    </div>
                </div>
            </div>
        </main>
    );
};
