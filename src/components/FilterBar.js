

export default function FilterBar(props) {
  // Radio group that sorts either by name alphabetically, length_in_seconds, or num_songs

  const radioOptions = [
    { id : 'rock' },
    { id : 'pop' },
    { id : 'dance' },
    { id : 'electronic' },
    { id : 'jazz' },
    { id : 'progressive rock' },
    { id : 'art rock' },
    { id : 'country' },
  ]

  return (
    // Basic radio layout attributed to tailwind component strucuture demo/documentation
    <div className="p-4">
    <label className="font-medium text-gray-900">Filter by Genre: </label>
    {/* <p className="text-sm leading-5 text-gray-500">How do you prefer to receive notifications?</p> */}
    <fieldset className="">
      <div className="space-y-4">
        {radioOptions.map((radioOption) => (
          <div className=" flex items-start" key={radioOption.id}>
        <div className="flex h-5 ">
        {/* {console.log("active filters: ", props.activeFilters)} */}
          <input
            id={radioOption.id}
            
            aria-describedby={radioOption.id}
            name={radioOption.id}
            type="checkbox"
            value={radioOption.id}
            checked={props.activeFilters && props.activeFilters.includes(radioOption.id)}
            className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
            onChange={
              (e) => {
                if (e.target.checked) {
                  props.addFilter(e.target.value)
                } else {
                  props.removeFilter(e.target.value)
                }
              }
            }

          />
  
          
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
          {radioOption.id}
          </label>
          {/* <p id="comments-description" className="text-gray-500">
            Get notified when someones posts a comment on a posting.
          </p> */}
        </div>
      </div>
        ))}
      </div>
    </fieldset>
    
  </div>
  
    // <div className="flex flex-row gap-x-10 items-center">
    //   <div className="flex items-center p-4">
    //     <div><span className="font-bold">Sort By: {props.sortBy}</span> <br/>
    //     <div className="flex flex-col items-left ">
    //     <div className="flex">
    //       <input type="radio" id="num_songs" name="sort" value="num_songs" checked={props.sortBy === "num_songs"} onChange={(e) => props.changeSort(e.target.value)} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
    //       <label >Number of Songs</label>
    //     </div>
    //     <div className="flex">
    //       <input type="radio" id="length_in_seconds" name="sort" value="length_in_seconds" checked={props.sortBy === "length_in_seconds"} onChange={(e) => props.changeSort(e.target.value)} />
    //       <label >Length (seconds)</label>
    //     </div>
    //     <div className="flex">
    //       <input type="radio" id="release_date" name="sort" value="release_date" checked={props.sortBy === "release_date"} onChange={(e) => props.changeSort(e.target.value)} />
    //       <label >Release Date</label>
    //     </div>

    //     </div>
    //     </div>
    //   </div>
    // </div>
  );
}