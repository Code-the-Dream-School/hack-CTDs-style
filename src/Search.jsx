import React from 'react'
import styles from './Header.module.css'
import CloseIcon from '@mui/icons-material/Close';
import { pink } from '@mui/material/colors';

export default function Search({setClicked}) {

    //state variables
    const [searchData, setSearchData] = React.useState({
        currSearch: "",
        pastSearches:[]
    });
    const [closeFocus, setCloseFocus] = React.useState(false)

    //handles color change for close icon
    const handleMouseEnter = () => {
        setCloseFocus(true);
    };

    const handleMouseLeave = () => {
        setCloseFocus(false);
    };

    //sets conditional render state to display header and hide search
    const handleClick = () => {
        setClicked(true);
    }

    function updateSearch(event) {
        const{name, value} = event.target
        setSearchData (prevSearchData => ({
            ...prevSearchData,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const{value} = event.target
        if (searchData.currSearch !== "") {
            alert(`You searched for ${searchData.currSearch}`)
            searchData.pastSearches.push(value);
            setSearchData(prevSearchData => ({
                ...prevSearchData,
                currSearch:""
            }))
            setClicked(true);
        } else {
            alert(`Searchbox is Empty`)
        }
      };
    
    return (
        <>
            <div className={styles.searchBox}>
                <form onSubmit={handleSubmit} className={styles.searchForm}>
                    <input 
                        type="text"
                        onChange={updateSearch} 
                        className={styles.searchInput} 
                        placeholder="Search CTD"
                        value={searchData.currSearch}
                        name="currSearch"
                    />
                </form>
                <div className={styles.topClose}>
                    <CloseIcon
                        onClick={handleClick}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        sx={()=> {
                            if(closeFocus){
                                return { color: pink[200] }
                            } else {
                                return { color: pink[900] }
                            }
                        }}
                        fontSize='large'
                    />
                </div>
            </div>
        </>
    );
}