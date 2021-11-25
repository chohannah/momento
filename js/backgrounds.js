const backgrounds = [
  {
    index: 0,
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1874&q=80',
    place: 'Unkown',
    author: 'v2osk',
  },
  {
    index: 1,
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    place: 'Unkown',
    author: 'Lukasz Szmigiel',
  },
  {
    index: 2,
    url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    place: 'Skye, United Kingdom',
    author: 'Robert Lukeman',
  },
  {
    index: 3,
    url: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    place: 'Unknown',
    author: 'Kunal Shinde',
  },
  {
    index: 4,
    url: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    place: 'Rieserferner-Ahrn Nature Park, Italy',
    author: 'eberhard 🖐 grossgasteiger',
  },
  {
    index: 5,
    url: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    place: 'Bad Pyrmont, Deutschland',
    author: 'Sebastian Unrau',
  },
  {
    index: 6,
    url: 'https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    place: 'Lake Tahoe, United States',
    author: 'Fabian Quintero',
  },
  {
    index: 7,
    url: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    place: 'Unknown',
    author: 'Sarah Dorweiler',
  },
  {
    index: 8,
    url: 'https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    place: 'San Diego, United States',
    author: 'frank mckenna',
  },
  {
    index: 9,
    url: 'https://images.unsplash.com/photo-1422564030440-1ecae6e21f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80',
    place: 'Paye Meadows, KPK, Pakistan',
    author: 'Sabeer Darr',
  },
  {
    index: 10,
    url: 'https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    place: 'Page, Arizona, United States',
    author: 'Kevin Lanceplaine',
  },
  {
    index: 11,
    url: 'https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    place: 'Kinney Lake, Canada',
    author: 'Kalen Emsley',
  },
  {
    index: 12,
    url: 'https://images.unsplash.com/photo-1489619243109-4e0ea59cfe10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    place: 'Sedona, United States',
    author: 'Darryl Brian',
  },
  {
    index: 13,
    url: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    place: 'Valley of Heroes, Tjentište , Bosnia and Herzegovina',
    author: 'Nikola Majksner',
  },
  {
    index: 14,
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80',
    place: 'North Shore, Waialua, United States',
    author: 'Sean Oulashin',
  },
]

const selectedBackgrounds =
  backgrounds[Math.floor(Math.random() * backgrounds.length)]
const background = document.createElement('img')

background.src = `${selectedBackgrounds.url}`

document.body.appendChild(background)
