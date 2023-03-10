import Navbar from "@common/Navbar";
import Footer from "@common/Footer";
import React, { PropsWithChildren } from "react";
import Drawer from "@ui/Drawer";
import Sidebar from "@components/Sidebar";
import { useUI } from "@context/UIContext/UIContext";
import CartSidebar from "@components/CartSidebar";
interface NavbarProps {
  transparent: boolean;
}
interface Props {
  NavbarProps?: NavbarProps;
}

const SidebarUI = () => {
  const { openSidebar, setCloseSidebar } = useUI();
  return openSidebar ? (
    <Drawer onClose={() => setCloseSidebar()}>
      <Sidebar onClose={() => setCloseSidebar()} />
    </Drawer>
  ) : null;
};

const CartSidebarUI = () => {
  const { openCartSidebar, setCloseCartSidebar } = useUI();

  return openCartSidebar ? (
    <Drawer onClose={() => setCloseCartSidebar()} position="right">
      <CartSidebar onClose={() => setCloseCartSidebar()} />
    </Drawer>
  ) : null;
};

const FrontLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  NavbarProps,
}) => {
  return (
    <div className="flex flex-col justify-between">
      <header className="fixed top-0 left-0 w-full ">
        <Navbar {...NavbarProps} />
      </header>
      <main className="bg-BODY_BG">{children}</main>
      <Footer />
      <SidebarUI />
      <CartSidebarUI />
    </div>
  );
};

export default FrontLayout;
