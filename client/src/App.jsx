const App = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div style={{ marginTop: '50px' }}>Logo</div>
        <div>
          <div className="flex list-none gap-10" style={{ marginLeft: '-300px', marginTop: '50px' }}>
            <li>Home</li>
            <li style={{opacity: 0.3}}>About</li>
            <li style={{opacity: 0.3}}>Services</li>
            <li style={{opacity: 0.3}}>Protfolio</li>
            <li style={{opacity: 0.3}}>Pricing</li>
          </div>
        </div>
        <div style={{ marginTop: '50px', marginLeft: '200px', borderWidth: '2px', borderStyle: 'solid', borderColor: 'purple', borderRadius: '10px', padding: '10px', backgroundColor: 'purple', width: '150px', textAlign: 'center' }}>Contact Us</div>
      </div>
      <div className="flex gap-10" style={{ marginTop: '100px', marginLeft: '100px' }}>
        <div>
          <div>
            <h1 style={{ fontSize: '50px', fontWeight: 'bold', lineHeight: '1.2' }}>We Help You <br /><span style={{ color: 'purple' }}>Crush</span> Your <br />Competition</h1>
            <div style={{ marginTop: '25px', color: 'gray' }}>Build trust to connect your brand to billions of <br />users and grow your revenue through SEO.</div>
          </div>
          <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'purple', borderRadius: '10px', padding: '15px', backgroundColor: 'purple', marginTop: '50px', width: '200px', textAlign: 'center' }}>See Our Services</div>
        </div>
        <div style={{ marginLeft: '500px', marginTop: '100px'}}>Image</div>
      </div>
    </div>
  );
};

export default App;