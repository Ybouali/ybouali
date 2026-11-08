import { motion, type Variants } from "framer-motion";
import type { Page } from "../../types";
import { Link } from "react-router-dom";
import { iconMap } from "./iconMap";

type ItemSideBarProps = {
  page: Page;
  onClick: (page: Page) => void;
  variants?: Variants | undefined;
};

const ItemSideBar = ({ page, onClick, variants }: ItemSideBarProps) => {
  const IconComponent = iconMap[page.icon_name as keyof typeof iconMap] || null;
  return (
    <motion.li key={page.page_name} variants={variants}>
      <Link
        to={page.path}
        onClick={() => onClick(page)}
        className={`py-1 pl-10 cursor-pointer flex items-center transition-colors ${
          page.selected
            ? "bg-owl-surface-hover text-owl-primary"
            : "text-owl-text hover:bg-owl-surface-hover hover:text-owl-text"
        }`}
      >
        {IconComponent && (
          <IconComponent
            className={`h-4 w-4 inline-block mr-2 ${page.selected ? "text-owl-primary" : "text-owl-text-muted"}`}
          />
        )}
        <span className="text-sm font-mono">{page.page_name}</span>
      </Link>
    </motion.li>
  );
};

export default ItemSideBar;
