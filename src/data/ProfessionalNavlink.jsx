/**
 * @description Data navlink for professional dashboard
 */

import {
  LayoutDashboard,
  CalendarDays,
  Wrench,
  MessageCircle,
  Wallet,
  Star,
  User,
  Bell,
  Settings,
} from "lucide-react";

export const professionalNavLinks = [
  { name: "Dashboard", path: "/dashboard/professional", icon: LayoutDashboard },
  { name: "Bookings", path: "bookings", icon: CalendarDays },
  { name: "Services", path: "services", icon: Wrench },
  { name: "Messages", path: "messages", icon: MessageCircle },
  { name: "Earnings", path: "earnings", icon: Wallet },
  { name: "Reviews", path: "reviews", icon: Star },
  { name: "Profile", path: "profile", icon: User },
  { name: "Notifications", path: "notifications", icon: Bell },
  { name: "Settings", path: "settings", icon: Settings },
];