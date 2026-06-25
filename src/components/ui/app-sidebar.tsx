import {
  Building2,
  ChevronsUpDown,
  GitBranch,
  GitFork,
  MessageCircle,
  Video,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Separator } from "./separator";
import { NavLink } from "react-router-dom";
import { HomeIcon, RocketLaunchIcon } from "@heroicons/react/16/solid";
import coDevIcon from "../../assets/coDev.png";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Sprints",
    url: "/sprints",
    icon: RocketLaunchIcon,
  },
  {
    title: "Git Activity",
    url: "/git",
    icon: GitBranch,
  },
  {
    title: "Chats",
    url: "/chats",
    icon: MessageCircle,
  },
  {
    title: "Conclave",
    url: "/conclave",
    icon: Video,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-gray-200 shadow-md">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex gap-3">
            <img src={coDevIcon} />
            <div>
              <h1 className="text-xl font-semibold">coDev</h1>
              <p className="text-xs">Ship together. Anywhere</p>
            </div>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                {/* Company Select */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton size="lg" className="bg-red-100 mt-4">
                      <Building2 />
                      <div className="flex flex-col text-left">
                        <span>Acme Inc</span>
                        <span className="text-xs text-muted-foreground">
                          Free Plan
                        </span>
                      </div>
                      <ChevronsUpDown className="ml-auto" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right">
                    <DropdownMenuItem>
                      <span>Acme Inc</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Branch Select */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton size="lg" className="bg-red-100 mt-4">
                      {/* <Building2 /> */}
                      <GitFork />
                      <div className="flex flex-col text-left">
                        <span>Dev Team</span>
                        {/* <span className="text-xs text-muted-foreground">
                          Free Plan
                        </span> */}
                      </div>
                      <ChevronsUpDown className="ml-auto" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right">
                    <DropdownMenuItem>
                      <span>Dev Team</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Separator className="w-full h-2 bg-gray-200 my-5" />
              </SidebarMenuItem>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <NavLink to={item.url}>
                    {({ isActive }) => (
                      <SidebarMenuButton
                        isActive={isActive}
                        className={`flex items-center py-7 text-base ${
                          isActive
                            ? "font-normal! text-[#724AE0] py-5 border-2 border-[#694CB8]/40 transition bg-linear-to-r from-[#F7F5FF] to-[#EDE7FF] drop-shadow-lg rounded-md"
                            : "text-gray-400 font-light"
                        }`}
                      >
                        <item.icon className="w-6! h-6!" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    )}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
