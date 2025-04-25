import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";

export const Header = () => {
    return (
        <div>
            <Logo/>
            <SearchBar onSearch={(s) => alert(s)}/>
        </div>
    );
}