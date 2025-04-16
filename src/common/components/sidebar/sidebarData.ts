/** @format */
import {
  FaUsers,
  FaBriefcase,
  FaIndustry,
  FaShare,
  FaUser,
  FaCalendar,
  FaTv,
  FaRegCircle,
  FaChevronDown,
  FaChevronUp,
  FaRegEdit,
  FaBullhorn,
  FaProductHunt,
  FaUserPlus,
  FaStar,
  FaRegClock,
  FaRegNewspaper,
  FaShareAlt,
  FaFileAlt,
  FaPen,
  FaInfoCircle,
  FaPlusCircle,
} from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { MdHotel } from "react-icons/md";
import { HiFilm } from "react-icons/hi";
import { Briefcase } from "lucide-react";
import { IoCall } from "react-icons/io5";
interface MenuItem {
  key: string;
  label: string;
  icon: React.ElementType;
  submenus: SubmenuItem[];
}
interface SubmenuItem {
  label: string;
  icon: React.ElementType;
}
export const menuItems: MenuItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: FaUsers,
    submenus: [{ label: "Manage Groups", icon: FaUsers }],
  },
  {
    key: "planner",
    label: "My Planner",
    icon: GrTasks,
    submenus: [
      { label: "My Schedule", icon: FaRegEdit },
      { label: "My Todo Lists", icon: FaBullhorn },
    ],
  },
  {
    key: "business",
    label: "My Allocated Business",
    icon: FaBriefcase,
    submenus: [
      { label: "My Reviews", icon: FaStar },
      { label: "Manage Requests", icon: GrTasks },
      { label: "Product / Service", icon: FaProductHunt },
      { label: "Customer Reviews", icon: FaStar },
      { label: "Sales Enquires", icon: IoCall },
      { label: "Franchise Requests", icon: FaUserPlus },
    ],
  },
  {
    key: "community",
    label: "Community Support Area",
    icon: FaIndustry,
    submenus: [
      { label: "Suspended Listing", icon: FaRegClock },
      { label: "Pending Group", icon: FaRegClock },
    ],
  },
  {
    key: "marketing",
    label: "Marketing Hub",
    icon: MdHotel,
    submenus: [
      { label: "My Articles", icon: FaRegNewspaper },
      { label: "My Blogs", icon: FaRegNewspaper },
    ],
  },
  {
    key: "contacts",
    label: "My Contacts",
    icon: FaShare,
    submenus: [{ label: "Invite Friends", icon: FaShareAlt }],
  },
  {
    key: "incentives",
    label: "Incentives & Commission",
    icon: HiFilm,
    submenus: [
      { label: "My Orders", icon: FaFileAlt },
      { label: "My Invoices", icon: FaRegNewspaper },
      { label: "Financial Transactions", icon: FaPen },
      { label: "Issued Credit Note", icon: FaFileAlt },
    ],
  },
  {
    key: "profile",
    label: "Profile",
    icon: FaUser,
    submenus: [
      { label: "Company Info", icon: FaInfoCircle },
      { label: "Personal Info", icon: FaInfoCircle },
      { label: "Build Your H.P", icon: FaPlusCircle },
      { label: "Products / Services", icon: FaPlusCircle },
    ],
  },
  {
    key: "meeting",
    label: "Meeting & Events",
    icon: FaCalendar,
    submenus: [
      { label: "My Meetings", icon: FaRegCircle },
      { label: "Schedule", icon: FaRegCircle },
    ],
  },
  {
    key: "advertising",
    label: "Advertising",
    icon: FaTv,
    submenus: [
      { label: "Ad Manager", icon: FaRegCircle },
      { label: "Analytics", icon: FaRegCircle },
    ],
  },
  {
    key: "bussiness",
    label: "Bussiness Plan",
    icon: Briefcase,
    submenus: [
      { label: "Plans", icon: FaRegCircle },
      { label: "Documents", icon: FaRegCircle },
    ],
  },
];
