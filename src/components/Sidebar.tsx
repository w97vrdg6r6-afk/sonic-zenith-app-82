import { Home, Search, Library, ListMusic } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Search", path: "/search" },
    { icon: Library, label: "Library", path: "/library" },
    { icon: ListMusic, label: "Playlists", path: "/playlists" },
  ];

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border p-6 flex flex-col gap-6">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-lg bg-gradient-primary"></div>
        <h1 className="text-xl font-bold">Music</h1>
      </div>
      
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
