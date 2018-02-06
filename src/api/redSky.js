import sampleItem from '../sample_data/item-data.json';

export default {
  //In a real world scenario, this would return a HTTP call promise (async)
  getItem: (tcin) => { return sampleItem; }
}
