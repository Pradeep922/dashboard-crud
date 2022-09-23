import axios from "axios";

const DataFetch = async () => {
  const { data } = await axios.get(
    "https://62ad96ef402135c7acc34e77.mockapi.io"
  );
  return data;
};

DataFetch();
export default DataFetch;