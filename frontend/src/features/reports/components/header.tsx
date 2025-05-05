export const Header = ({ headerInfo }: { headerInfo: string }) => {
  return <nav className="w-full h-16 bg-grey-300 shadow flex items-center justify-between px-4">
    {headerInfo}
  </nav>
}