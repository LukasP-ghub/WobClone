export interface SearchIconProps {

}

const SearchIcon: React.FC<SearchIconProps> = () => {
  return (
    <svg id="i-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <circle cx="14" cy="14" r="12" />
      <path d="M23 23 L30 30" />
    </svg>
  );
}

export default SearchIcon;