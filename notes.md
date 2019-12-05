# Design Notes
- Could of used custom filter but have used material data table filter in the past and 
it works well. 
- If I had to make a custom filter, I would have added an additional field to the TicketsEntityState called filter
 - This would make it east to use selectors for filtering the tickets and keep the filter logic out of the container
- Made the view ticket page before I looked too deeply at the backend api
 - If I had looked there first and originally planned to make all edits on the list page, I would have made that a page without any form elements.
 - Added go back button to make it easier to maintain state during navigation for now
 - Would like to of added some indication of whether a call succeeded or failed for the user. 
 - Also, should make an updated call to the backend after a failed call to be sure the state is up to date.

# Todo
 
# Done
- Add user state
- Add ticket
- Filter ticket
- Assign ticket
- Complete ticket

# Open items
- Add material design? 
- Use built in filter or create own?
- Create own at first and use selectors
 - add ticket filter to entity state or something
 
# Improvements

## Jest
- I usually move tests to jest, but may not for the sake of time
- Like jest for the snapshots and performance but karma works well too

## Nx
- could use but going to hold off since can be done without and get a similar result for now

## Other
- Would usually make entire ticket system in it's own feature
- Likely break users out into their own as well and just use cross feature selectors
- Be sure to use exported function for feature reducer for AOT compilation 
