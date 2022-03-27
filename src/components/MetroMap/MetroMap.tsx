import { useEffect, useRef } from 'react';

import Line from '../../types/Line';

interface MetroMapProps {
  width: number,
  height: number,
  lines: Line[]
}

export const MetroMap = (props: MetroMapProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        for (let line of props.lines) {
          // Draw lines
          ctx.strokeStyle = line.color;
          ctx.lineWidth = 10;
          for (let station of line.stations) {
            ctx.lineTo(station.mapPos.x, station.mapPos.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(station.mapPos.x, station.mapPos.y);
          }
          
          // Draw stations
          ctx.strokeStyle = '#000';
          ctx.fillStyle = '#ffffff';
          for (let station of line.stations) {
            ctx.beginPath();
            ctx.arc(station.mapPos.x, station.mapPos.y, 10, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
          }
        }
      }
    }
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={props.width}
        height={props.height}
      >
        Your browser doesn't support HTML5
      </canvas>
    </div>
  )
}
