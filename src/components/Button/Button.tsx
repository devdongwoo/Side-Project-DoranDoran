import { faComment, faUser } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IButton {
  type: number
  setCommunity: React.Dispatch<React.SetStateAction<boolean>>
}

const RIGHT = 30

const TYPE = [
  {
    type: 0,
    title: "커뮤니티",
    borderColor: "#ff8d4e",
    right: RIGHT * 3 + 80,
    icon: <FontAwesomeIcon icon={faComment} fontSize={18} />
  },
  {
    type: 1,
    title: "마커 생성",
    borderColor: "#ff8d4e",
    right: RIGHT * 2 + 40,
    icon: <FontAwesomeIcon icon={faLocationDot} fontSize={18} />
  },
  {
    type: 2,
    title: "로그인",
    borderColor: "#ff8d4e",
    right: RIGHT,
    icon: <FontAwesomeIcon icon={faUser} fontSize={18} />
  }
]

export default function Button({ type, setCommunity }: IButton) {
  const showHideBoard = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.currentTarget.title === "커뮤니티") {
      setCommunity((prev) => !prev)
    }
  }

  return (
    <button
      style={{
        position: "absolute",
        right: TYPE[type].right,
        top: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "100%",
        borderColor: TYPE[type].borderColor
      }}
      title={TYPE[type].title}
      onClick={(e) => {
        showHideBoard(e)
      }}
    >
      {TYPE[type].icon}
    </button>
  )
}
