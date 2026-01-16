

const App = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-10">
        <div>logo</div>
        <div>
          <div className="flex justify-between list-none gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Protfolio</li>
            <li>Pricing</li>
          </div>
        </div>
        <div>button</div>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div>
          <div>
            <h1>Heading</h1>
            <div>Paragraph</div>
          </div>
          <div>button</div>
        </div>
        <div>Image</div>
      </div>
    </div>
  );
};

export default App;
