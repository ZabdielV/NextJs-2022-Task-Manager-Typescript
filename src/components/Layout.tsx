import { Container } from "semantic-ui-react";
import { Navbar } from "./Navbar";
import Meta from "./Meta";




export const Layout = ({children}: {children: JSX.Element | JSX.Element[];}) => {
  return (
    <div>
      <Meta/>
      <Navbar />
      <main
        style={{
          backgroundColor: "#212121",
        }}
      >
        <Container
          style={{
            paddingTop: "2rem",
            height: "90vh",
          }}
        >
          {children}
        </Container>
      </main>
    </div>
  );
};
