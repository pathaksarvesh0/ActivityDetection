import { useActive } from "./Active";
import "./styles.scss";
function App() {
  const active = useActive(1000); // use timeout to test for 1 sec
  return (
    <div className={active ? "active activeMove" : "inactive inactiveMove"}>
      {active ? "user is active" : "user in inactive"}
    </div>
  );
}
export default App;
