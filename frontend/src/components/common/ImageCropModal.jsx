import { useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../utils/cropImage";

const ImageCropModal = ({ image, aspect, onCropComplete, onClose }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const handleDone = async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      onCropComplete(croppedImage);
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-lg bg-gray-900 rounded-xl p-4 flex flex-col items-center">
        <h3 className="text-white font-bold mb-3 text-lg">חתוך והתאם את התמונה</h3>

        <div className="relative w-full h-72 bg-black rounded-lg overflow-hidden">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={(_, pixels) => setCroppedAreaPixels(pixels)}
          />
        </div>

        <div className="w-full flex items-center gap-3 my-3">
          <span className="text-xs text-gray-400">זום:</span>
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="range range-primary range-xs flex-1"
          />
        </div>

        <div className="flex justify-end gap-2 w-full mt-2">
          <button onClick={onClose} className="btn btn-sm btn-ghost text-gray-300">
            ביטול
          </button>
          <button onClick={handleDone} className="btn btn-sm btn-primary text-white">
            שמור חיתוך
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropModal;