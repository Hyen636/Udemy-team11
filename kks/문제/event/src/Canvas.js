import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDotStore } from "./redux/dotSlice";
import { addLineStore } from "./redux/lineSlice";
import { changeCurrentColor } from "./redux/currentColorSlice";

function Canvas() {
  let line = [];
  const dots = useSelector((state) => state.DotStore);
  const lines = useSelector((state) => state.LineStore);
  const currentColor = useSelector((state) => state.CurrentColorStore);
  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;
    const canvasContext = canvas.getContext("2d");
    canvasContext.fillStyle = currentColor;
    canvasContext.strokeStyle = currentColor;
    canvasContext.lineWidth = 10;
    setCtx(canvasContext);
  }, []);
  const startDrawing = () => {
    setIsDrawing(true);
  };
  const stopDrawing = () => {
    setIsDrawing(false);
    if (line.length !== 0) {
      dispatch(addLineStore(line));
    }
  };
  const onDrawing = (event) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    if (!isDrawing) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
      line.push({ x, y });
    }
  };
  const drawingDot = (event) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    ctx.fillRect(x, y, 10, 10);
    dispatch(addDotStore({ x, y }));
  };
  const handleColorClick = (color) => {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    dispatch(changeCurrentColor(color));
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onMouseMove={onDrawing}
        onClick={drawingDot}
        style={{ border: 1, borderStyle: "solid" }}
      ></canvas>
      <div style={{ display: "flex", gap: 5 }}>
        <div
          style={{ width: 30, height: 30, backgroundColor: "#000" }}
          onClick={() => handleColorClick("#000")}
        ></div>
        <div
          style={{ width: 30, height: 30, backgroundColor: "#ff3b30" }}
          onClick={() => handleColorClick("#ff3b30")}
        ></div>
        <div
          style={{ width: 30, height: 30, backgroundColor: "#ff9500" }}
          onClick={() => handleColorClick("#ff9500")}
        ></div>
        <div
          style={{ width: 30, height: 30, backgroundColor: "#4cd963" }}
          onClick={() => handleColorClick("#4cd963")}
        ></div>
        <div
          style={{ width: 30, height: 30, backgroundColor: "#5856d6" }}
          onClick={() => handleColorClick("#5856d6")}
        ></div>
      </div>
    </>
  );
}

export default Canvas;
