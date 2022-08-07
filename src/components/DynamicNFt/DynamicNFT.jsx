import { useEffect, useState } from "react";
import { Md360, MdAdd, MdRemove } from "react-icons/md";
import "./style.css";

export const DynamicNFT = () => {
  const [rotate, setRotate] = useState(false);
  const [zoom, setZoom] = useState(1);

  // Zoom in
  const handleZoomIn = () => {
    if (zoom < 1.0) {
      setZoom((state) => state + 0.05);
    }
  };
  // Zoom out
  const handleZoomOut = () => {
    if (zoom > 0.5) {
      setZoom((state) => state - 0.05);
    }
  };
  //  rotate nft
  useEffect(() => {
    if (rotate) {
      setTimeout(() => {
        setRotate(false);
      }, 3000);
    }
  }, [rotate]);

  return (
    <div className="nft_container" id="dynamic_nft">
      <h2>Dynamic NFT</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus
        magna erat, eget scelerisque enim rutrum aliquet.
      </p>
      <div className={rotate ? "rotate nft" : "nft"}>
        <div
          style={{
            transition: "transform 300ms linear",
            transform: `scale(${zoom})`,
          }}
        >
          <img
            src="/images/dynamic-nft.png"
            className="nft_img"
            alt="Land Parcel"
          />
        </div>

        <div className="controls_position">
          <div className="cliped_border">
            <div className="controls_container">
              <button onClick={() => setRotate(true)}>
                <Md360 className="rotate_icon" />
              </button>
              <button onClick={handleZoomIn}>
                <MdAdd />
              </button>
              <button onClick={handleZoomOut}>
                <MdRemove />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
