import Button from "./Button";

function App() {

  return (
    <>
      <main className="min-h-screen grid place-content-center bg-teal-300">
        <h1 className="text-4xl py-6">React x Tailwind with Vite</h1>
        <div className="border-2 border-black p-6 flex flex-col align-middle items-center">
          <div>
            <Button
              type="increment"
            />
          </div>
          <p>{counter}</p>
        </div>
      </main>
    </>
  );
}

export default App;
