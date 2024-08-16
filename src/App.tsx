import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

const App = () => {
  return (
    <div>
      <Container>
        <div className="h-screen w-full flex justify-center items-center">
          <Button className="text-white text-xl px-5 py-2 rounded-lg" />
        </div>
      </Container>
    </div>
  );
};

export default App;
