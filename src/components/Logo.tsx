import * as React from "react";
import Image from "next/image";

type Props = { className?: string };

// Inline canonical leaf mark — kept as SVG so it scales crisply at any size
// and can be used for the favicon. Matches public/logos/BTS_leaf_mark_canonical.svg.
export const LeafMark: React.FC<Props> = ({ className }) => (
  <svg viewBox="0 0 500 500" className={className} aria-hidden="true">
    <path
      d="M 250,450 C 192,400 72,265 92,50 C 116,208 188,336 250,450 Z"
      fill="#4A8C5C"
    />
    <path
      d="M 250,450 C 222,374 172,224 204,26 C 238,218 262,368 250,450 Z"
      fill="#2A5C3F"
    />
    <path
      d="M 250,450 C 262,368 298,216 362,28 C 350,212 310,358 250,450 Z"
      fill="#D4A847"
    />
    <circle cx={250} cy={450} r={5} fill="#1A3A28" />
  </svg>
);

const ImgLogo = ({
  src,
  alt,
  className = "h-10",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <Image
    src={src}
    alt={alt}
    width={1600}
    height={600}
    priority
    quality={100}
    unoptimized
    className={`${className} w-auto`}
  />
);

export const LogoHorizontal: React.FC<Props> = ({ className }) => (
  <ImgLogo
    src="/logos/BTS_horizontal_white.svg"
    alt="Benjamin Tax Service"
    className={className}
  />
);

export const LogoHorizontalDark: React.FC<Props> = ({ className }) => (
  <ImgLogo
    src="/logos/BTS_horizontal_dark.png"
    alt="Benjamin Tax Service"
    className={className}
  />
);

export const LogoStacked: React.FC<Props> = ({ className = "h-24" }) => (
  <ImgLogo
    src="/logos/BTS_stacked_green.png"
    alt="Benjamin Tax Service"
    className={className}
  />
);

export const LogoWhite: React.FC<Props> = ({ className }) => (
  <ImgLogo
    src="/logos/BTS_horizontal_green.png"
    alt="Benjamin Tax Service"
    className={className}
  />
);

export const LogoStackedDark: React.FC<Props> = ({ className = "h-20" }) => (
  <ImgLogo
    src="/logos/BTS_stacked_dark.png"
    alt="Benjamin Tax Service"
    className={className}
  />
);
