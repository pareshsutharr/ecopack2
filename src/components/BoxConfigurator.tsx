"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Ports the #cube2/#stage2 3D box configurator shared verbatim by
 * index.html and packaging-design.html's inline scripts: L/W/H inputs,
 * cm/inch unit toggle, ply/finish pickers, draggable 3D preview with
 * idle auto-rotation, and a live summary + "Quote this box" deep link.
 */
export default function BoxConfigurator() {
  const [length, setLength] = useState("45");
  const [width, setWidth] = useState("30");
  const [height, setHeight] = useState("30");
  const [unit, setUnit] = useState<"cm" | "in">("cm");
  const [ply, setPly] = useState("5-Ply");
  const [finish, setFinish] = useState("Kraft Brown");

  const cubeRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const rotRef = useRef({ rx: -24, ry: 32 });
  const dragRef = useRef<[number, number, number, number] | null>(null);
  const paintRef = useRef<() => void>(() => {});

  paintRef.current = () => {
    const cube = cubeRef.current;
    if (!cube) return;
    const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b);
    const toCm = (v: number) => (unit === "cm" ? v : v * 2.54);
    const l = toCm(+length || 1);
    const b = toCm(+width || 1);
    const h = toCm(+height || 1);
    const mx = Math.max(l, b, h, 1);
    const k = 225 / mx;
    const pw = clamp(l * k, 26, 300);
    const pd = clamp(b * k, 26, 300);
    const ph = clamp(h * k, 26, 300);
    const set = (sel: string, wd: number, ht: number, tf: string) => {
      const el = cube.querySelector<HTMLElement>(sel);
      if (!el) return;
      el.style.width = wd + "px";
      el.style.height = ht + "px";
      el.style.transform = tf;
      el.style.left = "0";
      el.style.top = "0";
    };
    const cx = (300 - pw) / 2;
    const cy = (300 - ph) / 2;
    const cz = (300 - pd) / 2;
    set(".fzf", pw, ph, `translate(${cx}px,${cy}px) translateZ(${pd / 2}px)`);
    set(".fzb", pw, ph, `translate(${cx}px,${cy}px) translateZ(${-pd / 2}px) rotateY(180deg)`);
    set(".fxl", pd, ph, `translate(${(300 - pd) / 2}px,${cy}px) rotateY(-90deg) translateZ(${pw / 2}px)`);
    set(".fxr", pd, ph, `translate(${(300 - pd) / 2}px,${cy}px) rotateY(90deg) translateZ(${pw / 2}px)`);
    set(".fyt", pw, pd, `translate(${cx}px,${cz}px) rotateX(90deg) translateZ(${ph / 2}px)`);
    set(".fyb", pw, pd, `translate(${cx}px,${cz}px) rotateX(-90deg) translateZ(${ph / 2}px)`);
    cube.style.transform = `rotateX(${rotRef.current.rx}deg) rotateY(${rotRef.current.ry}deg)`;
    cube.querySelectorAll<HTMLElement>(".f").forEach((f) => {
      f.style.filter = finish === "White-Top" ? "saturate(.25) brightness(1.28)" : "";
    });
  };

  useEffect(() => {
    paintRef.current();
  }, [length, width, height, unit, ply, finish]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const onDown = (e: PointerEvent) => {
      dragRef.current = [e.clientX, e.clientY, rotRef.current.ry, rotRef.current.rx];
      stage.setPointerCapture(e.pointerId);
      e.preventDefault();
    };
    const onMove = (e: PointerEvent) => {
      if (!dragRef.current) return;
      const [x0, y0, ry0, rx0] = dragRef.current;
      rotRef.current.ry = ry0 + (e.clientX - x0) * 0.4;
      rotRef.current.rx = Math.min(Math.max(rx0 - (e.clientY - y0) * 0.4, -80), 10);
      paintRef.current();
    };
    const onUp = () => {
      dragRef.current = null;
    };

    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onUp);
    stage.addEventListener("pointercancel", onUp);

    const interval = setInterval(() => {
      if (!dragRef.current) {
        rotRef.current.ry += 0.25;
        paintRef.current();
      }
    }, 50);

    paintRef.current();

    return () => {
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerup", onUp);
      stage.removeEventListener("pointercancel", onUp);
      clearInterval(interval);
    };
  }, []);

  const toggleUnit = (nu: "cm" | "in") => {
    if (nu === unit) return;
    const f = nu === "in" ? 1 / 2.54 : 2.54;
    setLength(String(Math.round((+length || 0) * f * 10) / 10));
    setWidth(String(Math.round((+width || 0) * f * 10) / 10));
    setHeight(String(Math.round((+height || 0) * f * 10) / 10));
    setUnit(nu);
  };

  const summary = `${+length || 0} × ${+width || 0} × ${+height || 0} ${unit} (Length × Width × Height) · ${ply} · ${finish} — any size is manufacturable; send this spec for a quote in 4 business hours.`;
  const quoteHref = `/contact?spec=${encodeURIComponent(`${length}x${width}x${height}${unit}-${ply}-${finish}`)}`;

  return (
    <div className="conf3 rv">
      <div className="stage2" id="stage2" ref={stageRef}>
        <div className="scene2">
          <div className="cube2" id="cube2" ref={cubeRef}>
            <div className="f fzf">
              <Image
                src="/assets/logo.png"
                alt="Bhaavya Ecopack logo on corrugated box"
                width={80}
                height={26}
              />
              <span className="seam" />
            </div>
            <div className="f fzb" />
            <div className="f side fxl" />
            <div className="f side fxr" />
            <div className="f topf fyt" />
            <div className="f fyb" />
          </div>
        </div>
      </div>
      <div className="confpanel">
        <label>
          Units{" "}
          <span className="units" id="cunits">
            <button
              type="button"
              data-u="cm"
              className={unit === "cm" ? "on" : ""}
              onClick={() => toggleUnit("cm")}
            >
              cm
            </button>
            <button
              type="button"
              data-u="in"
              className={unit === "in" ? "on" : ""}
              onClick={() => toggleUnit("in")}
            >
              inches
            </button>
          </span>
        </label>
        <div className="row" style={{ marginTop: 12 }}>
          <div>
            <label htmlFor="cL">Length</label>
            <input
              type="number"
              id="cL"
              value={length}
              min={1}
              step={0.5}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cB">Width</label>
            <input
              type="number"
              id="cB"
              value={width}
              min={1}
              step={0.5}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cH">Height</label>
            <input
              type="number"
              id="cH"
              value={height}
              min={1}
              step={0.5}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <label>Ply</label>
          <div className="opts" id="cply">
            {["3-Ply", "5-Ply", "7-Ply"].map((p) => (
              <button
                type="button"
                key={p}
                data-v={p}
                className={ply === p ? "on" : ""}
                onClick={() => setPly(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 16 }}>
          <label>Finish</label>
          <div className="opts" id="cfin">
            {["Kraft Brown", "White-Top"].map((f) => (
              <button
                type="button"
                key={f}
                data-v={f}
                className={finish === f ? "on" : ""}
                onClick={() => setFinish(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="sum" id="csum">
          {summary}
        </div>
        <div className="ctas" style={{ marginTop: 18 }}>
          <Link className="btn btn-primary" id="confq" href={quoteHref}>
            Quote this box
          </Link>
          <Link className="btn btn-secondary" href="/packaging-design">
            Full design studio
          </Link>
        </div>
      </div>
    </div>
  );
}
