"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Ports js/site.js's #cube/#stage hero box: momentum-based drag rotation
 * that decays back to a slow idle auto-spin, driven by requestAnimationFrame.
 */
export default function Hero3DBox() {
  const stageRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const cube = cubeRef.current;
    if (!stage || !cube) return;

    let rx = -14;
    let ry = 32;
    let vx = 0;
    let vy = 0;
    let drag = false;
    let px = 0;
    let py = 0;
    let idle = true;
    let raf = 0;

    const render = () => {
      cube.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    render();

    const tick = () => {
      if (!drag) {
        if (idle) {
          ry += 0.25;
        } else {
          ry += vy;
          rx += vx;
          vx *= 0.94;
          vy *= 0.94;
          if (Math.abs(vx) < 0.02 && Math.abs(vy) < 0.02) idle = true;
        }
        rx = Math.max(-70, Math.min(40, rx));
        render();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onDown = (e: PointerEvent) => {
      drag = true;
      idle = false;
      px = e.clientX;
      py = e.clientY;
      stage.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!drag) return;
      vy = (e.clientX - px) * 0.4;
      vx = -(e.clientY - py) * 0.3;
      ry += vy;
      rx = Math.max(-70, Math.min(40, rx + vx));
      px = e.clientX;
      py = e.clientY;
      render();
    };
    const onUp = () => {
      drag = false;
    };

    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      cancelAnimationFrame(raf);
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div className="visual stage" id="stage" ref={stageRef}>
      <div className="grid-bg" />
      <div className="shadow3d" />
      <div className="scene" id="scene">
        <div className="cube" id="cube" ref={cubeRef}>
          <div className="face fz f1">
            <div className="lg">
              <Image src="/assets/logo.png" alt="" width={80} height={26} draggable={false} />
            </div>
            <span className="frag">Moisture-Resistant · 5-Ply</span>
            <div className="marks">
              <span>♻</span>
              <span>☂</span>
              <span>↑↑</span>
            </div>
          </div>
          <div className="face fz back f2">
            <div className="flute-edge" style={{ opacity: 0.25 }} />
          </div>
          <div className="face fx f3">
            <span className="frag" style={{ left: 12, top: 12 }}>
              Made in India · Kosamba, Gujarat
            </span>
            <div className="marks">
              <span>⚠</span>
              <span>☂</span>
            </div>
          </div>
          <div className="face fx f4">
            <div className="flute-edge" style={{ opacity: 0.2 }} />
          </div>
          <div className="face fy f5">
            <div className="tape" />
            <div className="seam" />
          </div>
          <div className="face fy f6" />
        </div>
      </div>
      <div className="chip3 c1">
        <i>🛡️</i> Cobb-tested moisture barrier
      </div>
      <div className="chip3 c2">
        <i>✓</i> ISO 9001:2015
      </div>
      <div className="chip3 c3">
        <i>📦</i> 3 / 5 / 7-ply engineered
      </div>
      <div className="chip3 c4">
        <i>🖨️</i> Multi-colour print
      </div>
      <span className="hint3">Drag to rotate</span>
    </div>
  );
}
