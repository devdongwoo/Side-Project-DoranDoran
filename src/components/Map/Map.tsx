import { useState, useEffect } from "react"

import { setGeolocation } from "../../utilities/setter/map"

import Button from "../Button/Button"
import Board from "../Board/Board"

export default function Map() {
  const [showGeolo, setShowGeolo] = useState(false)

  const [community, setCommunity] = useState(false)

  useEffect(() => {
    if (navigator.geolocation) {
      setShowGeolo(true)
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
          console.log("you would get a concrete error message!", err)
          setShowGeolo(false)
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
        justifyContent: "center",
        position: "relative"
      }}
    >
      {showGeolo ? (
        <div id="map" style={{ minWidth: "100vw", height: "100vh" }} />
      ) : (
        <div style={{ minWidth: "100vw", height: "100vh" }}>
          오 이런 위치 설정을 허용 해주셔야 합니다.
        </div>
      )}
      {[0, 1, 2].map((idx) => {
        return <Button type={idx} setCommunity={setCommunity} key={idx + 1} />
      })}
      {community && <Board />}
    </div>
  )
}
