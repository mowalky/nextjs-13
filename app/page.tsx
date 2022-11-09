'use client'

import {use} from "react";

async function fetchData() {
  const response = await fetch("http://localhost:3000/api/hello");
  return response.json();
}

export default function Home() {
  const data = use(fetchData());
  return <div>{JSON.stringify(data)}</div> 
}
