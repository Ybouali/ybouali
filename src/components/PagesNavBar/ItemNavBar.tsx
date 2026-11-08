import { XMarkIcon } from "@heroicons/react/24/outline";
import type { Page } from "../../types";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { iconMap } from "../SideBar/iconMap";
import { useAppContext } from "../../context/useAppContext";

type Props = {
  page: Page;
};

function ItemNavBar({ page }: Props) {
  const IconComponent = iconMap[page.icon_name as keyof typeof iconMap] || null;

  const { removePageFromNavbar, pagesInNavbar } = useAppContext();
  const navigate = useNavigate();

  const parentVariants = {
    rest: { transition: { staggerChildren: 0.1 } },
    hover: { transition: { staggerChildren: 0.1 } },
  };

  const iconVariants = {
    rest: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
    hover: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    removePageFromNavbar(page.page_name);

    // Navigate to the next available page in the navbar
    const remainingPages = pagesInNavbar.filter(
      (p) => p.page_name !== page.page_name,
    );
    if (remainingPages.length > 0) {
      navigate(remainingPages[remainingPages.length - 1].path);
    } else {
      navigate("/");
    }
  };

  return (
    <motion.div
      className={`group flex flex-row h-full items-center justify-center border-r border-owl-border transition-colors ${
        page.selected
          ? "bg-owl-bg text-owl-primary border-t-2 border-t-owl-accent"
          : "bg-owl-surface hover:bg-owl-surface-hover text-owl-text-muted"
      }`}
      variants={parentVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <Link
        to={page.path}
        className="flex items-center text-sm font-mono h-full py-2 pl-3"
      >
        {IconComponent && (
          <IconComponent
            className={`h-4 w-4 inline-block mr-2 ${page.selected ? "text-owl-primary" : "text-owl-text-muted"}`}
          />
        )}
        {page.page_name}
      </Link>
      <motion.div variants={iconVariants} className="pr-3 pl-1 py-2">
        <XMarkIcon
          className="h-4 w-4 text-owl-text-muted hover:text-owl-error cursor-pointer"
          onClick={handleClose}
        />
      </motion.div>
    </motion.div>
  );
}

export default ItemNavBar;
