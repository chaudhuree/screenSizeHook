import useScreenSize from "./hooks/useScreenSize"
function App() {

  const screenSize = useScreenSize();

  return (
    <div>
      {screenSize === 'mobile' && (
        <div>
          {/* Mobile Component */}
          <h1>This is a Mobile Component</h1>
        </div>
      )}
      {screenSize === 'tablet' && (
        <div>
          {/* Tablet Component */}
          <h1>This is a Tablet Component</h1>
        </div>
      )}
      {screenSize === 'desktop' && (
        <div>
          {/* Desktop Component */}
          <h1>This is a Desktop Component</h1>
        </div>
      )}
    </div>
  )
}

export default App;