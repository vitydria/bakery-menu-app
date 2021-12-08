import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { MenuComponent } from "../MenuComponent/MenuComponent";
import "./../MenuFrame/MenuFrame.css";
import menu from "../../menu.json";
import { Main } from "../Main/Main";

export const MenuFrame = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav className="nav-bar">
          <ul className="nav-ul">
            <li className="nav-li">
              <NavLink
                to="/desayunos"
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-li-a"
                }
              >
                Desayunos <i className="fas fa-bread-slice"></i>
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                to="/almuerzos"
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-li-a"
                }
              >
                Almuerzos <i className="fas fa-utensils"></i>
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                to="/luncheria"
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-li-a"
                }
              >
                Luncheria <i className="fas fa-hamburger"></i>
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                to="/bebidas"
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-li-a"
                }
              >
                Bebidas <i className="fas fa-wine-glass"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="desayunos"
            element={<MenuComponent list={menu.breakfast} index={-1} />}
          />
          <Route
            path="almuerzos"
            element={<MenuComponent list={menu.lunch} index={-1} />}
          />
          <Route
            path="luncheria"
            element={<MenuComponent list={menu.meal} index={-1} />}
          />
          <Route
            path="bebidas"
            element={<MenuComponent list={menu.drinks} index={-1} />}
          />
          <Route path="*" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
