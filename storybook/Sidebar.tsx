import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href?: string;
  icon: React.ReactNode;
  badge?: string;
  children?: { label: string; href: string }[];
}

interface SidebarProps {
  items: NavItem[];
  bottomItems?: NavItem[];
  logo?: React.ReactNode;
  user?: { name: string; email: string; avatar?: string };
}

// ─── Menu item ───────────────────────────────────────────────────────────────
//
// Figma specs (node 9263:160934):
//   height: 40px
//   padding: 6px 8px
//   border-radius: 8px
//   gap (icon + label): 4px
//   font: Inter 500 16px / 1.5
//   icon size: 24×24px
//
//   ACTIVE:   background #f3f4f6  text #42389d  icon #42389d
//   INACTIVE: background transparent  text #111928  icon #111928
//   HOVER:    background #e5e7eb  text #111928  icon #111928

function MenuItem({ item, isActive }: { item: NavItem; isActive: boolean }) {
  return (
    <NavLink
      to={item.href ?? "#"}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        // base
        "flex items-center gap-1 h-10 px-2 py-1.5 rounded-lg w-full",
        "text-base font-medium leading-6 no-underline transition-colors duration-100",
        // inactive
        "text-[#111928] bg-transparent",
        // hover (only when not active)
        !isActive && "hover:bg-[#f3f4f6] hover:text-[#111928]",
        // active — Figma 9263:160934: bg #e5e7eb, text #42389d
        isActive && "bg-[#e5e7eb] text-[#42389d]"
      )}
    >
      {/* icon — 24×24, inherits color from parent text-color */}
      {/* icon must be 24×24px solid filled, inherits text color */}
      <span
        className="flex-shrink-0 flex items-center justify-center w-6 h-6"
        style={{ color: isActive ? "#42389d" : "#111928" }}
      >
        {item.icon}
      </span>

      <span className="flex-1 truncate">{item.label}</span>

      {item.badge && (
        <span className="ml-auto text-xs text-[#6b7280] font-normal flex-shrink-0">
          {item.badge}
        </span>
      )}
    </NavLink>
  );
}

// ─── Expandable menu item ─────────────────────────────────────────────────────

function ExpandableMenuItem({ item }: { item: NavItem }) {
  const location = useLocation();
  const isChildActive = item.children?.some((c) => location.pathname === c.href);
  const [open, setOpen] = useState(isChildActive ?? false);

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1 h-10 px-2 py-1.5 rounded-lg w-full",
          "text-base font-medium leading-6 transition-colors duration-100",
          "text-[#111928] bg-transparent hover:bg-[#e5e7eb]"
        )}
      >
        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-[#111928]">
          {item.icon}
        </span>
        <span className="flex-1 text-left truncate">{item.label}</span>
        {item.badge && (
          <span className="text-xs text-[#6b7280] font-normal flex-shrink-0">
            {item.badge}
          </span>
        )}
        <span className="flex-shrink-0 text-[#1f2a37] ml-1">
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>

      {open && item.children && (
        <div className="pl-7 flex flex-col gap-2 mt-1">
          {item.children.map((child) => {
            const active = location.pathname === child.href;
            return (
              <NavLink
                key={child.href}
                to={child.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center h-10 px-2 py-1.5 rounded-lg",
                  "text-base font-medium leading-6 no-underline transition-colors duration-100",
                  active
                    ? "bg-[#f3f4f6] text-[#42389d]"
                    : "text-[#111928] bg-transparent hover:bg-[#e5e7eb]"
                )}
              >
                {child.label}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
//
// Figma specs (node 9272:163206):
//   width: 256px
//   background: #f3f4f6
//   border-right: 1px solid #e5e7eb
//   logo padding: 24px 8px 0 28px
//   nav padding: 0 8px 0 28px
//   gap between sections: 24px
//   gap between items: 8px

export function Sidebar({ items, bottomItems, logo, user }: SidebarProps) {
  const location = useLocation();

  return (
    <aside
      style={{
        width: 256,
        background: "#f3f4f6",
        borderRight: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        height: "100vh",
        boxSizing: "border-box",
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      {logo && (
        <div style={{ padding: "24px 8px 0 28px" }}>
          {logo}
        </div>
      )}

      {/* Main nav */}
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "0 8px 0 28px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {items.map((item) => {
          if (item.children) {
            return <ExpandableMenuItem key={item.label} item={item} />;
          }
          const active = item.href ? location.pathname === item.href : false;
          return <MenuItem key={item.label} item={item} isActive={active} />;
        })}
      </nav>

      {/* Divider */}
      {bottomItems && (
        <div style={{ height: 1, background: "#e5e7eb", width: "100%", flexShrink: 0 }} />
      )}

      {/* Bottom nav */}
      {bottomItems && (
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            padding: "0 8px 0 28px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {bottomItems.map((item) => {
            const active = item.href ? location.pathname === item.href : false;
            return <MenuItem key={item.label} item={item} isActive={active} />;
          })}
        </nav>
      )}

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* User profile */}
      {user && (
        <div
          style={{
            padding: "12px 16px",
            borderTop: "1px solid #e5e7eb",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#42389d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              flexShrink: 0,
            }}
          >
            {user.name[0]}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#111928", truncate: true }}>
              {user.name}
            </div>
            <div style={{ fontSize: 12, color: "#6b7280", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {user.email}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
