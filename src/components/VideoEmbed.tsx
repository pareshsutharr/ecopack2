"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoEmbedProps {
  youtubeId: string;
  title: string;
  className?: string;
}

export default function VideoEmbed({ youtubeId, title, className }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`video-embed${className ? ` ${className}` : ""}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="video-embed-trigger"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt={title}
            fill
            sizes="(max-width: 800px) 100vw, 960px"
            style={{ objectFit: "cover" }}
          />
          <span className="play-btn" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
