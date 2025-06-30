// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
export interface AvatarIconProps {
  accountNumber: number;
  accountAvatar: string | null;
  avatarSize?: number;
  iconSize?: number;
}

export interface AvatarIconWithOverlayProps {
  avatar: React.JSX.Element;
  avatarSize: number;
  iconSize: number;
  iconPadding?: number;
}
