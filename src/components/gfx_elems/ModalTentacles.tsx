import {
  tentacle_green_modal,
  tentacle_pink_modal,
  tentacle_purple_modal,
  tentacle_submit,
} from "../../assets/img";
import { style } from "./Tentacles";

interface IModalTentaclesProps {
  type: string;
}

const ModalTentacles = ({ type }: IModalTentaclesProps) => {
  if (type === "submit")
    return (
      <div className={`right-0 -bottom-[70px] w-[170px] ${style.div}`}>
        <img src={tentacle_submit} className={style.img} />
      </div>
    );
  else {
    return (
      <div
        className={`relative flexbox rounded-xl bg-gradient-to-r from-gray w-full h-2 mt-5 overflow-visible`}
      >
        <div className={`-left-[300px] top-[20px] w-[350px] ${style.div}`}>
          <img
            src={
              type === "green"
                ? tentacle_green_modal
                : type === "pink"
                ? tentacle_pink_modal
                : tentacle_purple_modal
            }
            className={style.img}
          />
        </div>
      </div>
    );
  }
};

export default ModalTentacles;
