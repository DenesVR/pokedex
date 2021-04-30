import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";
import DetailData from "./DetailData";

const fetcher = url => axios.get(url).then(res => res.data);

function Detail() {
  const { name } = useParams();
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher
  );
  console.log(data);
  return <div>{data && <DetailData data={data} />}</div>;
}

export default Detail;
