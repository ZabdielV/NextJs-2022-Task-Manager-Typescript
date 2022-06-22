import { Container, Menu, Button } from "semantic-ui-react";
import Image from "next/image";
import home from '../../assets/home_logo.png'
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  return (
    <Menu inverted attached style={{ padding: "1.5rem" }}>
      <Container>
        <Menu.Item onClick={() => router.push("/")}>
          <Image
            width="50"
            height="50"
            src={home}
            alt="nextjs logo"
          />
        </Menu.Item>  
        <h1 style={{color: "white", margin: "auto" }}>Task manager</h1>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button onClick={() => router.push("/tasks/new")} primary>
              New Task
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};
