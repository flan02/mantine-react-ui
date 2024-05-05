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
    <header className="sticky top-0 z-50 h-20 bg-white" ref={clickOutsideRef}>
      <Container className="flex items-center justify-between w-full h-full px-10 m-0 max-w-none">
        <img src={companyLogo} alt="company logo" />
        <Group className="hidden h-full sm:block">
          <ul className="flex items-center justify-center h-full font-medium gap-x-3 md:gap-x-5 lg:gap-x-10 text-blue-950">
            <li className="navLink">Home</li>
            <li className="navLink">About</li>
            <li className="navLink">Contact</li>
            <li className="navLink">Blog</li>
            <li className="navLink">Careers</li>
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
              className="bg-white absolute top-[5.5rem] left-0 right-0 z-0 w-[95%] mx-auto py-5 rounded overflow-hidden sm:hidden"
              shadow="xl"
              style={styles}
            >
              <ul className="flex flex-col items-center justify-center text-4xl font-medium gap-y-12 text-blue-950 ">
                <li
                  className="flex items-center justify-center w-full h-10 cursor-pointer hover:text-emerald-500"
                  onClick={close}
                >
                  Home
                </li>
                <li
                  className="flex items-center justify-center w-full h-10 cursor-pointer hover:text-emerald-500"
                  onClick={close}
                >
                  About
                </li>
                <li
                  className="flex items-center justify-center w-full h-10 cursor-pointer hover:text-emerald-500"
                  onClick={close}
                >
                  Contact
                </li>
                <li
                  className="flex items-center justify-center w-full h-10 cursor-pointer hover:text-emerald-500"
                  onClick={close}
                >
                  Blog
                </li>
                <li
                  className="flex items-center justify-center w-full h-10 cursor-pointer hover:text-emerald-500"
                  onClick={close}
                >
                  Careers
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
