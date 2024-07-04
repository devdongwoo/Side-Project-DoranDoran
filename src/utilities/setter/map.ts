interface IPosition {
  [key: string]: number
}

export function setGeolocation(
  position: IPosition,
  map: any,
  infowindow: naver.maps.InfoWindow
) {
  const location = new naver.maps.LatLng(position.latitude, position.longitude)

  map.setCenter(location)
  map.setZoom(15)

  infowindow.setContent(
    `<div style="padding:20px;">
      사용자분의 현 위치입니다.
      (※ 현 위치 주변 오차범위가 발생할 수 있습니다.)
      </div>`
  )

  infowindow.open(map, location)
}
