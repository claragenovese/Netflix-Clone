This project is an enhancement of netflix-clone, and it was created as a solution of two core problems:

  1. The initial page load time was excessively long.
 
Inicially, before the page loads, all the request data for the whole application were loaded to an array, and considering that the application displays hundreds of images, that implies a huge initial load time. To fix this, I have reduced the number of initial API requests by requesting data only when that specifically data needs to be shown to the user. I also implemented lazy loading in order to rendering only critical user interface items, and I migrated the project from CRA to Vite.

All these modifications reduced the initial loading time over 60%, and improved the performance of the application.


  2. The app did not store the selected movies after refreshing.
 
In order to solve this I implement Firestore, so now when a user sing up, an array of saved movies is set up in the Firestore Database, which is updated as movies are added or removed, allowing each account to save their specific content.
