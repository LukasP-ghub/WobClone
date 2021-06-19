export interface StarIconProps {

}

const StarIcon: React.FC<StarIconProps> = () => {
  return (
    <svg id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" style={{ display: 'none' }}>
      <symbol id="star">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
      </symbol>
    </svg>
  );
}

export default StarIcon;