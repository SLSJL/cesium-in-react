import React, { useEffect, useRef } from "react";
import "./startUp.less";
import { Viewer } from "cesium";

const StartUp = () => {
  const csmViewerRef = useRef<null | Viewer>(null);
  const viewerContainerRef = useRef(null);

  useEffect(() => {
    if (viewerContainerRef.current && !csmViewerRef.current) {
      csmViewerRef.current = new Viewer("csm-viewer-container");
    }
  }, [viewerContainerRef]);

  return (
    <div
      className="csm-viewer-container"
      id="csm-viewer-container"
      ref={viewerContainerRef}
    ></div>
  );
};

export default StartUp;
