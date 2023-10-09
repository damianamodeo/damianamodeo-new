type searchSuburbType = { searchString: string };

export const searchForMapboxSuburbDetails = ({ searchString }: searchSuburbType) => {
  try {
    const response = fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/` +
        `${searchString}.json?` +
        `types=place&` +
        `proximity=151.209889,-33.874666&` +
        `access_token=pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.features;
      });

    return response;
  } catch (error) {
    return error;
  }
};

export default searchForMapboxSuburbDetails;
