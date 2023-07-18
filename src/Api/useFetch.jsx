import { useEffect } from "react";

useEffect(() => {
  const handleClick = async()=> {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }
}, [])
