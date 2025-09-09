import Image from "next/image";
import { User } from "lucide-react";
import { useState } from "react";

type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
};

export default function Avatar({ src, alt, size = 50 }: AvatarProps) {
  const [error, setError] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden"
      style={{ width: size, height: size }}
    >
      {!error ? (
        <Image
          src={src}
          alt={alt}
          width={50}
          height={50}
          className="rounded-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <User className="w-2/3 h-2/3 text-gray-500 dark:text-gray-300" />
      )}
    </div>
  );
}
