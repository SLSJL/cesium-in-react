import React, { useEffect, useRef } from "react"
import "./home.less"
import { Viewer, CesiumTerrainProvider, Ion, Rectangle, Camera } from "cesium"
import { CesiumToken } from "./constant"

Ion.defaultAccessToken = CesiumToken
Camera.DEFAULT_VIEW_RECTANGLE = Rectangle.fromDegrees(113.802555, 22.460383, 114.491389, 22.180264)
Camera.DEFAULT_VIEW_FACTOR = 0

const StartUp = () => {
  const csmViewerRef = useRef<null | Viewer>(null)
  const viewerContainerRef = useRef(null)

  const onLoadingTerrain = () => {
    if (csmViewerRef.current) {
      csmViewerRef.current.terrainProvider = new CesiumTerrainProvider({
        url: "http://localhost:7000/terrain",
        requestVertexNormals: true
      })
    }
  }

  useEffect(() => {
    if (viewerContainerRef.current && !csmViewerRef.current) {
      const viewer = new Viewer("csm-viewer-container", {
        animation: false,
        timeline: false,
        geocoder: false,
        fullscreenButton: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        homeButton: false,
        baseLayerPicker: false,
        navigationInstructionsInitiallyVisible: false,
        creditContainer: "cesium-credit"
      })
      csmViewerRef.current = viewer
      // viewer.camera.flyTo({ destination: Cartesian3.fromDegrees(114.180807, 22.295909, 10000) })
    }
  }, [viewerContainerRef])

  return (
    <>
      <div className="csm-viewer-tools">
        <button onClick={() => onLoadingTerrain()}>Load terrain</button>
      </div>
      <div
        className="csm-viewer-container"
        id="csm-viewer-container"
        ref={viewerContainerRef}
      ></div>
      <div id="cesium-credit"></div>
    </>
  )
}

export default StartUp
