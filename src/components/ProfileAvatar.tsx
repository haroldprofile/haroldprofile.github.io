import { useState } from 'react';
import { User } from 'lucide-react';

interface ProfileAvatarProps {
  photoPath: string;
  photoAlt: string;
  monogram: string;
}

export function ProfileAvatar({ photoPath, photoAlt, monogram }: ProfileAvatarProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="avatar-wrap">
      <div className="avatar-frame">
        <span className="avatar-corner avatar-corner-tl" aria-hidden="true" />
        <span className="avatar-corner avatar-corner-tr" aria-hidden="true" />
        <span className="avatar-corner avatar-corner-bl" aria-hidden="true" />
        <span className="avatar-corner avatar-corner-br" aria-hidden="true" />

        <div className="avatar-inner">
          {!hasError ? (
            <img
              src={photoPath}
              alt={photoAlt}
              className="avatar-image"
              loading="eager"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="avatar-placeholder" role="img" aria-label={photoAlt}>
              <User size={40} strokeWidth={1.75} color="#10B981" aria-hidden="true" />
              <span className="avatar-monogram">{monogram}</span>
              <span className="avatar-hint">public/profile.jpg</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
