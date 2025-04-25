import { SyntheticEvent, useEffect, useRef } from "react";
import * as styles from "../../styles/index.module.scss";

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
    const handleSearch = ()=>{
        if(inputRef.current && inputRef.current.value){
            onSearch(inputRef.current.value);
            if(clearOnSearch)
                inputRef.current.value="";
        }
    }
    return (
        <div>
            <input ref={inputRef} placeholder={placeholder} onInput={handleInput}></input>
            <button className={styles.button} onClick={handleSearch}>Найти</button>
        </div>
    );
    
}