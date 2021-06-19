export interface CloseIconProps {
  strokeWidth?: number,
  strokeColor?: string,
}

const CloseIcon: React.FC<CloseIconProps> = ({ strokeWidth = 2, strokeColor = 'currentcolor' }) => {
  return (
    <svg id="i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%" fill="none" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>
      <path d="M2 30 L30 2 M30 30 L2 2" />
    </svg>
  );
}

export default CloseIcon;