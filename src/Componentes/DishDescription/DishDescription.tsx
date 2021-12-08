import { DescriptionProps } from "../../interfaces/interfaces";
import { Main } from "../Main/Main";
import { useClose } from "../../hooks/useClose";
import "../../Componentes/DishDescription/DishDescription.css";

export const DishDescription = (props: DescriptionProps) => {
  const { list, index, setState } = props;
  const { closeInfo, setCloseInfo } = useClose();

  if (!closeInfo || !list[index]) {
    return <Main />;
  } else {
    return (
      <div className="description">
        <img
          src={list[index].img}
          alt="Yummy!"
          className="img-description"
        ></img>
        <button
          className="closeButton"
          onClick={() => {
            setCloseInfo(false);
            setState(false);
          }}
        >
          <i className="far fa-times-circle i-button-size"></i>
        </button>
        <ul className="nav-ul-desc">
          <li className="nav-li-desc">{list[index].desc}</li>
          <li className="nav-li-desc">{list[index].price}</li>
        </ul>
      </div>
    );
  }
};
