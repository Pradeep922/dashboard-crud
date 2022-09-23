import axios from "axios";

const PostData = async (body) => {
  const newData = await axios.post(
    "https://62ad96ef402135c7acc34e77.mockapi.io/userData/",
    body
  );
  return newData;
};

export default PostData;