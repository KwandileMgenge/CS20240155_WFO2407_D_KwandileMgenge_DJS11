import { useState, useEffect} from "react"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function PreviewLayout() {
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(searchQuery); // Update debounced query after delay
        }, 500); // Adjust debounce delay time (in ms)

        return () => clearTimeout(timer); // Clean up on component unmount or query change
    }, [searchQuery]);

    useEffect(() => {
        if (debouncedQuery) {
            navigate(`/previews?query=${debouncedQuery}`); // Navigate when debounced query is set
        }
    }, [debouncedQuery, navigate]);

    const handleChange = (e) => {
        setSearchQuery(e.target.value); // Update search query on input change
    };

    return (
        <>
            <header>
                <div>
                    <h2>Browse</h2>
                    <p>What do you want to hear today?</p>
                </div>
            </header>
            <input
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search podcasts..."
            />
            <Outlet />
        </>
    )
}