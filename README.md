# Pahkla Posse food4all Project

### Goals: Create an interactive map of food stores in Denver and the assets in communities that could be activated for food distribution particularly in the summer time for youth.

#### Iteration 0: Map the Food Stores in Denver
  - [x] B.E.: create restful API from [this data](https://www.denvergov.org/opendata/dataset/city-and-county-of-denver-food-stores)
  - [x] F.E.: create Map Interface using google map

#### Iteration 1: Overlay community assets

#### Iteration 2: Tie in RTD travel times/ schedule data

- [x] Create a comp - Juan killing it!
- [ ] Add google for map information API (Sam will guide us!)
- [ ] find data for community assets
- [ ] build out endpoints : all stores, search by store type, zip-code (sliding radius), healthy corner store initiative, name of store  


##### Endpoint Documentation

`/api/v1/store_types` returns a list of all store types

`/api/v1/stores/find?type=STORE_TYPE` returns all stores matching that store type
 * store types: ["dollar store", "small grocery store", "convenience store", "convenience store with gas", "specialty food store", "closed specialty food store", "supermarket", "pharmacy", "closed small grocery store", "superette", "closed convenience store", "discount merchandise market", "supercenter", "warehouse club store", "closed supermarket"] ojo: type with spaces in url in browser not sure in fetch calls.
