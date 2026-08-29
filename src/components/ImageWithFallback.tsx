import React, { useState } from 'react';
import { User } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  name?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className,
  name,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    const cleanName = (name || '')
      .replace(/^(Bc\.|Ing\.|Mgr\.|MUDr\.|JUDr\.|RNDr\.|PhDr\.|DiS\.)\s+/i, '')
      .replace(/,\s*(EFA|PFP|DiS\.|MBA|LL\.M\.|Ph\.D\.|CSc\.)/gi, '')
      .trim();

    const parts = cleanName.split(/\s+/).filter(Boolean);
    const initials = parts.length >= 2 
      ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
      : (parts[0] ? parts[0].slice(0, 2).toUpperCase() : '');

    return (
      <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 font-bold select-none border border-slate-200/60 ${className}`}>
        {initials ? (
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl tracking-wider text-slate-700">{initials}</span>
            <span className="text-xs font-medium text-slate-400 mt-2">ZFP Jagoš & Cábovi</span>
          </div>
        ) : (
          <User className="w-12 h-12 text-slate-400" />
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
      {...props}
    />
  );
};

