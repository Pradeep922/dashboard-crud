import axios from "axios";

const EditData = async (id, body) => {
  try {
    const data = await axios.put(
      `https://62ad96ef402135c7acc34e77.mockapi.io/userData/${id}`,
      body
    );
    return data.status;
  } catch (e) {
    console.log("error", e.message);
  }
};

export default EditData;