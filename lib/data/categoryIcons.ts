import {
  StickyNote,
  Briefcase,
  User,
  Lightbulb,
  CheckSquare,
  ShoppingCart,
  Heart,
  MapPin,
  BookOpen,
  Film,
  AlertCircle,
  Calendar,
  Music,
  MessageSquare,
  Key,
} from "lucide-react";

export const categoryIconsMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  general: StickyNote,
  work: Briefcase,
  personal: User,
  ideas: Lightbulb,
  tasks: CheckSquare,
  shopping: ShoppingCart,
  health: Heart,
  travel: MapPin,
  education: BookOpen,
  entertainment: Film,
  reminders: AlertCircle,
  events: Calendar,
  music: Music,
  messages: MessageSquare,
  passwords: Key,
};
