import {
  tentacles,
  tentacles_green,
  tentacles_pink,
  tentacles_purple,
} from "../../assets/img";

interface ITentaclesProps {
  type: string;
}

export const style = {
  div: "absolute overflow-visible z-10 pointer-events-none",
  img: "w-full h-auto",
};

const Tentacles = ({ type }: ITentaclesProps) => {
  if (type === "side") {
    return (
      <div className={`left-0 bottom-0 w-[min(25vw,350px)] ${style.div}`}>
        <img src={tentacles} className={style.img} />
      </div>
    );
  } else {
    return (
      <>
        <div className={`left-[150px] top-[-20px] w-[130px] ${style.div}`}>
          <img src={tentacles_green} className={style.img} />
        </div>
        <div className={`right-[25%] top-[-30px] w-[180px] ${style.div}`}>
          <img src={tentacles_pink} className={style.img} />
        </div>
        <div className={`right-0 top-[140px] w-[80px] ${style.div}`}>
          <img src={tentacles_purple} className={style.img} />
        </div>
      </>
    );
  }
};

export default Tentacles;
