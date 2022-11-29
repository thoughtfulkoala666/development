

export default function SortBar(props) {
  // Radio group that sorts either by name alphabetically, length_in_seconds, or num_songs

  const radioOptions = [
    { id: 'name', title: 'Name (alphabetic)', value: 'name' },
    { id: 'num_songs', title: 'Number of Songs', value: 'num_songs' },
    { id: 'length_in_seconds', title: 'Album Length (seconds)',  value: 'length_in_seconds' },
    { id: 'release_date', title: 'Release Date', value: 'release_date' },
  ]

  return (
    // Basic radio layout attributed to tailwind component strucuture demo/documentation
    <div className="p-4">
    <label className="font-medium text-gray-900">Sort by: </label>
    {/* <p className="text-sm leading-5 text-gray-500">How do you prefer to receive notifications?</p> */}
    <fieldset className="">
      <div className="space-y-4">
        {radioOptions.map((radioOption) => (
          <div key={radioOption.id} className="flex items-center">
            <input
              id={radioOption.id}
              name="notification-method"
              type="radio"
              value={radioOption.value}
              onChange={(e) => {props.changeSort(e.target.value)}}
              // defaultChecked={notificationMethod.id === 'name'}
              checked={radioOption.id === props.sortBy}
              className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
            />
            <label htmlFor={radioOption.id} className="ml-3 block text-sm font-medium text-gray-700">
              {radioOption.title}
            </label>
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