import axios from "axios";

const DeleteData = async (id) => {
  try {
    const data = await axios.delete(
      `https://62ad96ef402135c7acc34e77.mockapi.io/userData/${id}`
    );
    return data.status;
  } catch (e) {
    console.log("error", e.message);
  }
};

export default DeleteData;