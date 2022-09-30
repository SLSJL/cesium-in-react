import React, { useEffect, useRef } from "react";
import "./startUp.less";
import { Viewer, CesiumTerrainProvider } from "cesium";

const StartUp = () => {
  const csmViewerRef = useRef<null | Viewer>(null);
  const viewerContainerRef = useRef(null);

  const onLoadingTerrain = () => {
    if (csmViewerRef.current) {
      csmViewerRef.current.terrainProvider = new CesiumTerrainProvider({
        url: 'http://localhost:7000/terrain',
        requestVertexNormals: true
      })
    }

  }

  useEffect(() => {
    if (viewerContainerRef.current && !csmViewerRef.current) {
      const viewer = new Viewer("csm-viewer-container");


      csmViewerRef.current = viewer
    }
  }, [viewerContainerRef]);

  return (
    <>
      <div   className="csm-viewer-tools">
        <button onClick={() => onLoadingTerrain()}>
          Load terrain
        </button>
      </div>

      <div
        className="csm-viewer-container"
        id="csm-viewer-container"
        ref={viewerContainerRef}
      ></div>
    </>

  );
};

export default StartUp;
