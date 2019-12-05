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