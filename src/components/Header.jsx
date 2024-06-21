import { useEffect } from "react";
import {
  Container,
  Group,
  Burger,
  Button,
  Paper,
  Transition,
  VisuallyHidden,
} from "@mantine/core";
import { useDisclosure, useClickOutside } from "@mantine/hooks";
import companyLogo from "../assets/images/logo.svg";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const clickOutsideRef = useClickOutside(() => close());

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 640) {
        close();
      }
    });
  });

  return (
    <header className="sticky top-0 z-50 h-16 bg-white" ref={clickOutsideRef}>
      <Container className="flex items-center justify-between w-full h-full px-10 m-0 max-w-none">
        <img src={companyLogo} alt="company logo" />
        <Group className="hidden h-full sm:block">
          <ul className="flex items-center justify-center h-full font-medium gap-x-3 md:gap-x-5 lg:gap-x-10 text-blue-950">
            <li className="navLink">
              <a href="/">Home</a>
            </li>
            <li className="navLink">
              <a href="/about">About</a>
            </li>
            <li className="navLink">
              <a href="/nft">NFT</a>
            </li>
            <li className="navLink">
              <a href="/crypto">Crypto</a>
            </li>
            <li className="navLink">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </Group>

        <Button className="hidden md:block gradientButton opacityHover">
          Request Invite
        </Button>

        <Burger
          opened={opened}
          onClick={toggle}
          className="block sm:hidden"
          size="md"
        >
          <VisuallyHidden>{opened ? <X /> : <Menu />}</VisuallyHidden>
        </Burger>

        <Transition transition="pop-top-right" duration={500} mounted={opened}>
          {(styles) => (
            <Paper
              withBorder
              className="absolute top-[5.5rem] left-0 right-0 z-0 w-[95%] mx-auto py-5 rounded overflow-hidden sm:hidden"
              shadow="xl"
              style={styles}
            >
              <ul className="flex flex-col items-center justify-center py-16 text-4xl font-medium bg-emerald-50 gap-y-12 text-blue-950 ">
                <li className="flex items-center justify-center w-full h-10 cursor-pointer hover:text-emerald-500 hover:underline">
                  <a href="/">Home</a>
                </li>
                <li
                  className="flex items-center justify-center w-full h-10 cursor-pointer hover:text-emerald-500 hover:underline"
                  onClick={close}
                >
                  <a href="/about ">About</a>
                </li>

                <li
                  className="flex items-center justify-center w-full h-10 cursor-pointer hover:text-emerald-500 hover:underline"
                  onClick={close}
                >
                  NFT
                </li>
                <li
                  className="flex items-center justify-center w-full h-10 cursor-pointer hover:text-emerald-500 hover:underline"
                  onClick={close}
                >
                  Crypto
                </li>
                <li
                  className="flex items-center justify-center w-full h-10 cursor-pointer hover:text-emerald-500 hover:underline"
                  onClick={close}
                >
                  Contact
                </li>
              </ul>
            </Paper>
          )}
        </Transition>
      </Container>
    </header>
  );
};

export default Header;
