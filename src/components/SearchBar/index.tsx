import { SyntheticEvent, useEffect, useRef } from "react";
import * as style from "../../styles/search_bar/search_bar.module.scss";

export type TSearchBarProps = {
    placeholder?: string;
    clearOnSearch?: boolean;
    onInput?: (val: string) => void;
    onSearch: (search: string) => void;
}

export const SearchBar = ({placeholder = "Поиск по объявлениям", onInput, onSearch, clearOnSearch= false} : TSearchBarProps) =>{
    const inputRef = useRef<HTMLInputElement>(null);
    const handleInput = (e: SyntheticEvent) =>{
        if(inputRef.current){
            onInput?.(inputRef.current.value);
        }
    }
    const handleSearch = (e: SyntheticEvent)=>{
        e.preventDefault();
        if(inputRef.current){
            console.log("Search " + inputRef.current.value)
            onSearch(inputRef.current.value);
            if(clearOnSearch)
                inputRef.current.value="";
        }
    }
    return (
        <form className={style["search-bar"]} onSubmit={handleSearch}>
            <input className={style["search-bar__field"]} ref={inputRef} placeholder={placeholder} onInput={handleInput}></input>
            <button type="submit" className={style["search-bar__find-btn"]}>Найти</button>
        </form>
    );
    
}