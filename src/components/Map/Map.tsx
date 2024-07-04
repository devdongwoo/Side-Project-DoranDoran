import { useState, useEffect } from "react"
import { setGeolocation } from "../../utilities/setter/map"

interface IMap {
  flatform?: string
}

export default function Map({ flatform = "naver" }: IMap) {
  const [showGeolo, setShowGeolo] = useState(false)

  useEffect(() => {
    if (navigator.geolocation) {
      setShowGeolo((prevShow) => (prevShow = true))
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const map = new naver.maps.Map("map", {
            center: new naver.maps.LatLng(37.5666805, 126.9784147),
            zoom: 10,
            mapTypeId: naver.maps.MapTypeId.NORMAL
          })

          const infowindow = new naver.maps.InfoWindow()

          const { latitude, longitude } = position.coords
          setGeolocation({ latitude, longitude }, map, infowindow)
        },
        (err) => {
          console.log("you would get a concrete error message!")
          setShowGeolo((prevShow) => (prevShow = false))
        }
      )
    } else {
      console.log("no geolocation")
    }
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {showGeolo ? (
        <div id="map" style={{ minWidth: "100vw", height: "100vh" }} />
      ) : (
        <div style={{ minWidth: "100vw", height: "100vh" }}>
          오 이런 위치 설정을 허용 해주셔야 합니다.
        </div>
      )}
    </div>
  )
}
