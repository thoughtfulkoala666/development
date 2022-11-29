import "./App.css";
import React, { useEffect, useState } from "react";
import albumData from "./assets/album-data.json";
import AlbumItem from "./components/AlbumItem";
// import CartItem from "./components/CartItem";
import FilterBar from "./components/FilterBar";
import FilterBarTwo from "./components/FilterBarTwo";
import SortBar from "./components/SortBar";
import FavoriteBar from "./components/FavoriteBar";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
albumData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

// make a prices map from the bakeryData
const prices = {};
albumData.forEach((item) => {
  prices[item.name] = item.price;
});
console.log(prices)

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const originalAlbumData = [...albumData];
  const [displayedItems, setDisplayedItems] = useState(originalAlbumData);
  const [sortBy, setSortBy] = useState("name");
  
  const [activeFilters, setActiveFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);


  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const [totalNumSongs, setTotalNumSongs] = useState(0);
  const [totalLengthInSeconds, setTotalLengthInSeconds] = useState(0);
  const [selectedGenres, setSelectedGenres] = useState(new Set());

  useEffect(() => {
    // Set the totalNumSongs, totalLengthInSeconds, and selectedGenres based on the favorites list
    let totalNumSongs = 0;
    let totalLengthInSeconds = 0;
    let selectedGenres = new Set();

    favorites.forEach((favorite) => {
      const album = albumData.find((album) => album.name === favorite);
      totalNumSongs += album.num_songs;
      totalLengthInSeconds += album.length_in_seconds;
      album.genres.forEach((genre) => selectedGenres.add(genre));
    })

    setTotalNumSongs(totalNumSongs);
    setTotalLengthInSeconds(totalLengthInSeconds);
    console.log("selected genres: ", selectedGenres);
    setSelectedGenres(selectedGenres);

  }, [favorites]);

  // Function that removes a filter from the active filter list
  const addFilterToActive = (filterItem) => {
    setActiveFilters([...activeFilters, filterItem]);
  }
  // Function that removes a filter from the active filter list
  const removeFilterFromActive = (filterItem) => {
    setActiveFilters(activeFilters.filter((item) => item !== filterItem));
  }

  // Function that adds a filter to the color filter list
  const addFilteredColor = (filterItem) => {
    setColorFilters([...colorFilters, filterItem]);
  }
  // Function that removes a filter from the color filter list
  const removeFilteredColor = (filterItem) => {
    setColorFilters(colorFilters.filter((item) => item !== filterItem));
  }
  
  // Function that adds an item to the favorites list
  const addFavorite = (item) => {
    setFavorites([...favorites, item]);
  }
  // Function that removes an item from the favorites list
  const removeFavorite = (item) => {
    setFavorites(favorites.filter((favorite) => favorite !== item));
  }

  // useEffect that filters displayeditems by active filters sorts the displayedItems by the sortBy field
  useEffect(() => {
    let newSortedAndFiltered = originalAlbumData;
    // Filters by active filters
    // If filters is empty, do not filter!
    if (activeFilters.length > 0) {
      // Filter by active filters
      newSortedAndFiltered = newSortedAndFiltered.filter((item) => {
        // If any of the items genres are in active filters, return true
        // return item.genres.some((genre) => activeFilters.includes(genre));
        
        // If any of the active Filters are not in the item's genres, return false
        return activeFilters.every((filter) => item.genres.includes(filter));
      }
    )};

    if(colorFilters.length > 0) {
      newSortedAndFiltered = newSortedAndFiltered.filter((item) => {
        return colorFilters.every((filter) => item.album_colors.includes(filter));
      }
    )};
    
    // Does sorting 
    newSortedAndFiltered = [...newSortedAndFiltered].sort((a, b) => {
      if(a[sortBy] < b[sortBy]) {
        return -1;
      }
      if(a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });

    if(showOnlyFavorites){
      // newSortedAndFiltered retains only items that are also in favorites
      newSortedAndFiltered = newSortedAndFiltered.filter((item) => favorites.includes(item.name));
    }

    console.log("sorted!")
    setDisplayedItems(newSortedAndFiltered);
  }, [sortBy, activeFilters, showOnlyFavorites, colorFilters]);



  return (
    <div className="App flex flex-col items-center h-screen text-neutral-800 min-w-[700px]">
      <h1 className="text-5xl md:text-7xl text-center p-10 font-bold bg-neutral-50 w-screen fixed whitespace-nowrap ">Thoughtful Koala's Albums</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="p-10 m-10"></div>
  

      <div id="shoppingcontainer" className="flex w-full px-5 space-x-5">
      <div id="cart" className="w-1/6 min-w-[400px] md:min-w-[400px]">
          {/* <div className="fixed flex items-center justify-center w-[30rem]"> */}
            <div className="  top-40 justify-center items-center  border-neutral-800 border-2 rounded-xl">
              <div className=" text-center items-center justify-center inset-0 ">
              {/* <h2 className="text-4xl font-bold">Filtering</h2> */}
              {/* iterate through and display the cart */}
              <SortBar sortBy={sortBy} changeSort={setSortBy} />
            
              <FilterBar activeFilters={activeFilters} addFilter={addFilterToActive} removeFilter={removeFilterFromActive} />
              <FilterBarTwo activeFilters={colorFilters} addFilter={addFilteredColor} removeFilter={removeFilteredColor} />
              <button type="button" className="inline-flex w-5/6 items-center rounded-md border border-transparent bg-red-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:blue-red-500 focus:ring-offset-2" onClick={(e) => {setActiveFilters([]); setColorFilters([])}}>Reset all Filters</button>
              <FavoriteBar setShowFavorites={setShowOnlyFavorites}  />
              <div className="p-4">
                <p className="font-medium text-gray-900">Favorites Summary: </p>
                <p>Number of Songs in all favorite albums: <b>{totalNumSongs}</b></p>
                <p>Total length (in seconds) of all favorite albums: <b>{totalLengthInSeconds}</b></p>
                {/* Display favorite genres in the set */}
                <p>Favorite genres: <b>{Array.from(selectedGenres).join(", ")}</b></p>

              </div>
            </div>
            </div>
            {/* TODO: render a list of items in the cart */}
          {/* </div> */}
        </div>

        <div id="menu" className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-5/6">
        {displayedItems.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <React.Fragment key={index}>
          {/* <p>Bakery Item {index}</p> // replace with BakeryItem component */}
            <AlbumItem {...item} addFavorite={addFavorite} removeFavorite={removeFavorite} isFavorite={favorites.includes(item.name)}></AlbumItem>
          </React.Fragment>
        ))}
        {displayedItems.length <= 0 && <p className="text-2xl font-bold items-center w-full">No items match your filters! Try expanding your search...</p>}
        </div>

        
      </div>
    </div>
  );
}

export default App;
