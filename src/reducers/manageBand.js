export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let randomNum = Math.floor(Math.random() * 10000000);
      let band = { ...action.payload, id: randomNum };
      console.log({ bands: [...state.bands, band] });
      return { bands: [...state.bands, band] };
    case 'DELETE_BAND':
      let newBands = state.bands.filter(band => band.id !== action.id);
      console.log({ bands: newBands });
      return { bands: newBands };
    default:
      return state;
  }
};
