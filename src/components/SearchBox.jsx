import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

// eslint-disable-next-line react/prop-types
const SearchBox = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = (event) => {
        if (event) {
            event.preventDefault();
        }
        onSearch(searchText);
    };

    return (
        <Paper
            component="form"
            onSubmit={handleSearch}
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: { xs: '75%', md: '400px' },
                margin: { xs: '0px', md: 'auto' },
                marginLeft: { xs: '55px', md: 'auto' },
            }}
        >
            <InputBase
                value={searchText}
                onChange={handleInputChange}
                placeholder="Pesquisar"
                inputProps={{ 'aria-label': 'Pesquisar' }}
                sx={{ ml: 1, flex: 1 }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <Button
                type="button"
                sx={{ p: '10px' }}
                aria-label="pesquisar"
                onClick={handleSearch}
            >
                <SearchIcon />
            </Button>
        </Paper>
    );
};

export default SearchBox;
