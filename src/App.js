import { UsersList } from "./components/UsersList";
import { Albums } from "./components/Albums";
import { useSelector } from "react-redux";

function App() {
  const { userSelected } = useSelector(state => state.users);

  return (
    <section className="section">
      <div className='container'>
        <h1 className='title'>Test Proxy-band</h1>
        <div className='columns'>
          <div className='column'>
            <p className='subtitle'>Users table</p>
            <UsersList />
          </div>

          {userSelected.id !== undefined && (
            <Albums />
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
