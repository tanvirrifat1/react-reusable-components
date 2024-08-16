import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

const App = () => {
  return (
    <div>
      <Container>
        <div className="h-screen w-full flex justify-center items-center">
          <Button variant="outline" outline={false} className="" />
        </div>
      </Container>
    </div>
  );
};

export default App;
