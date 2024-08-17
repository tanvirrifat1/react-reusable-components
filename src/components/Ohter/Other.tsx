import { useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

const App = () => {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const name = event.target.username.value;
    const password = event.target.password.value;

    console.log({
      name,
      password,
    });

    if (true) {
      handleModalClose();
    }
  };

  return (
    <Container>
      <div className=" h-screen w-full flex justify-center items-center">
        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <Modal.CloseButton />
          </Modal.Header>
          {/* <h1>Hello</h1> */}
          <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10  dark:bg-slate-300 text-black">
            <h1 className="text-3xl font-semibold tracking-tight">Sign In</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 text-sm">
                <label
                  htmlFor="username"
                  className="block text-black dark:text-black font-medium"
                >
                  Username
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none "
                  id="username"
                  placeholder="Enter username"
                  name="username"
                  type="text"
                  required
                />
              </div>
              <div className="space-y-2 text-sm">
                <label
                  htmlFor="password"
                  className="block text-black dark:text-black font-medium"
                >
                  Password
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none "
                  id="password"
                  placeholder="Enter password"
                  name="password"
                  type="password"
                  required
                />
              </div>
              <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </Container>
  );
};

export default App;
