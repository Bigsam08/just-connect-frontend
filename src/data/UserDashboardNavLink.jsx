import {
  LayoutDashboard,
  Search,
  ClipboardList,
  MessageCircle,
  Heart,
  User,
  Settings,
} from "lucide-react";

export const userNavlinksData = [
  {
    name: "Dashboard",
    path: "/dashboard/user",
    icon: LayoutDashboard,
  },
  {
    name: "Find Artisan",
    path: "find-artisan",
    icon: Search,
  },
  {
    name: "Bookings",
    path: "bookings",
    icon: ClipboardList,
  },
  {
    name: "Messages",
    path: "messages",
    icon: MessageCircle,
  },
  {
    name: "Saved",
    path: "saved",
    icon: Heart,
  },
  {
    name: "Profile",
    path: "profile",
    icon: User,
  },
  {
    name: "Settings",
    path: "settings",
    icon: Settings,
  },
];
