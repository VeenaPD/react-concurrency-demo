import React, { useState } from "react";

const DashboardRCM = ({stocks}) => {
    // State for search input and watchlist
    const [search, setSearch] = useState("");
    const [watchlist, setWatchlist] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Filter stocks based on search input
    const filteredStocks = stocks.filter(stock =>
        stock.name.toLowerCase().includes(search.toLowerCase())
    );

    // Add a stock to the watchlist
    const addToWatchlist = (stock) => {
        setIsLoading(true); // Simulate loading
        setTimeout(() => {
            setWatchlist([...watchlist, stock]);
            setIsLoading(false);
        }, 500); // Simulated delay for updating the watchlist
    };

    return (
        <div className="without-rc-container">
            <h1>Stock Dashboard <span className="titleHighlight">  Without React Concurrency </span></h1>
            {/* Render Filtered Stocks */}
            <h3>Stock List</h3>
             {/* Search Input */}
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search stocks..."
                className="searchBox"
            />
            {isLoading ? <p>Loading...</p> : (
                 <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                 {filteredStocks.map(stock => (
                    <tr key={stock.id}>
                        <td>{stock.name}</td>
                        <td>${stock.price}</td>
                        <td><button className="watchlistBtn" onClick={() => addToWatchlist(stock)}>Watch</button></td>
                    </tr>
                ))}
            </table>
            )}

            {/* Watchlist */}
            <h3>Watchlist</h3>
            {watchlist.length > 0 ? <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                    {watchlist.map(stock => (
                    <tr key={stock.id}>
                        <td>{stock.name}</td>
                        <td>${stock.price}</td>
                    </tr>
                ))}
            </table> : <p> No items added </p> 
            }
        </div>
    );
};

export default DashboardRCM;

