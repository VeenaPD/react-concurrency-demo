import React, { useState, useTransition, useDeferredValue } from 'react';

function Dashboard({ stocks }) {
    // State for search input and watchlist
    const [search, setSearch] = useState("");
    const [watchlist, setWatchlist] = useState([]);
    const [isPending, startTransition] = useTransition();
    const deferredSearch = useDeferredValue(search);

    // Filter stocks based on search input
    const filteredStocks = stocks.filter(stock =>
        stock.name.toLowerCase().includes(deferredSearch.toLowerCase())
    );

    // Add a stock to the watchlist
    const addToWatchlist = (stock) => {
        setTimeout(() => {
            startTransition(() => setWatchlist([...watchlist, stock]));
        }, 500); // Simulated delay for updating the watchlist
    };

    return (
        <div className="with-rc-container">
            <h1>Stack Dashboard <span className="titleHighlight">  With React Concurrency </span></h1>
            {/* Render Filtered Stocks */}
            <h3>Stocklist</h3>
             {/* Search Input */}
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search stocks..."
                className="searchBox"
            />
            {isPending ? <p>Loading...</p> : (
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
}

export default Dashboard;