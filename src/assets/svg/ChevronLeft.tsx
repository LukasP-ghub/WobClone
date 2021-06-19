export interface ChevronLeftProps {
  width?: number,
  height?: number,
}

const ChevronLeft: React.FC<ChevronLeftProps> = ({ width = 32, height = 32 }) => {
  return (
    <svg id="i-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M20 30 L8 16 20 2" />
    </svg>
  );
}

export default ChevronLeft;