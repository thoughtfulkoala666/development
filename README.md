# Development

### Link to Deployed Website
https://thoughtfulkoala666.github.io/development/

### Goal and Value of the Application
The goal of the website is to show users some good musical albums, and allow them to sort and filter based on the sonic qualities of the album, in addition to the visual appearance of the album cover. This targets users who are both interested in the musical aspects of the albums themselves, in addition to collectors who are also concerned with the apperance of the album. There is also a bunch of other interesting and useful information about the album that a user might find useful.

### Usability Principles Considered
Learnability was a large principle that was considered in the development of this application. The layout was kept consistent with many sort/filter interfaces of the same flavor, such as those found in online shopping. Even though the topic is different, the user is still very capable of learning the interface and material.

### Organization of Components
Each Album is represented by an AlbumItem component. Each selection section that the user might interact with is also its own component. In the App.js file, AlbumItems are created from the original JSON data, based on the stateful filtering/sorting criteria.

### How Data is Passed Down Through Components
Each Album is represented by an AlbumItem component, that takes in data fetched from the JSON file, in addition to state that is provided to the component (am I or am I not a favorite album). The component is also passed callback functions capable of adding and removing itself from a favorite list.

Each filtering/sorting section is its own component that also accept the relevant stateful variable that it reads from to determine if it is selected, and has the capability (through the use of callback fxns) of adding/removing to the list of active filters in addition to changing the current sorting method.

### How the User Triggers State Changes
There is a useeffect that depends on the stateful variables tracking the active filters, current sorting method, and list of favorites. This useffect re-runs the sorting and filtering on any dependency change. When any of the dependencies are changed, the albums are re-sorted and filtered, because a user has indicated a change in criteria for display. It uses the original/full list at the beginning of each search/filter pattern because the user might want to either constrain/release certain criteria in either direction.
