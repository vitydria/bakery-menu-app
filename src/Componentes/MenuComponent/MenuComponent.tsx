import { MenuProps } from "../../interfaces/interfaces";
import { useShow } from "../../hooks/useShow";
import { DishDescription } from "../DishDescription/DishDescription";
import "../../Componentes/MenuComponent/MenuComponent.css";
import { Main } from "../Main/Main";

export const MenuComponent = (props: MenuProps) => {
  const { hideInfo, indexArray, showInfo, setHideInfo } = useShow();

  return (
    <div className="menu-layout">
      <ul>
        {props.list.map((prop, index) => (
          <li className="li" key={index}>
            <button className="button" onClick={() => showInfo(index)}>
              <i className="fas fa-cookie-bite"></i> {prop.name}
            </button>
          </li>
        ))}
      </ul>
      {hideInfo && (
        <DishDescription
          list={props.list}
          index={indexArray}
          setState={setHideInfo}
        />
      )}
      {!hideInfo && <Main />}
    </div>
  );
};
