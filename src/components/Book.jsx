import { NavLink, Outlet } from 'react-router';

const Book = () => {
  return (
    <>
      <div className="main">
        <nav>
          <ul className="navigation">
            <li>
              <NavLink className="nav-link" to={'/book/components'}>
                Components
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/book/props'}>
                Props
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/book/state'}>
                State
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/book/lifecycle'}>
                LifeCycle
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/book/events'}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/book/key'}>
                Key
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/book/refs'}>
                Refs
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/book/fragment'}>
                Fragment
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/book/memo'}>
                React.Memo
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/book/use-context'}>
                useContext
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/book/use-memo'}>
                useMemo
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/book/router'}>
                Router
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to={'/book/forms'}>
                Forms
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Book;
