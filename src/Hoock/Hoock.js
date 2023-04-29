import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRenderReducer } from "../Slices/getDataSlice";

// get fetch data
const useFetch = (endpoint) => {
  const token = localStorage.getItem("HeyLinkToken")
  const { render } = useSelector((state) => state.getData);
  const [data, setData] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`http://localhost:8000/app/v1/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
      });
    dispatch(setRenderReducer({ render: false }))
  }, [render]);

  return data;
};

export default useFetch;
