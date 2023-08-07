import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [mypro, setMypro] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    await axios
      .get("https://tareq-backend-bestfit.onrender.com/api/products")
      .then((response) => {
        setMypro(response.data.products);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <>loading...</>
      ) : (
        <>
          {mypro.map((data) => (
            <div key={data.brand}>{data.brand}</div>
          ))}
        </>
      )}
    </div>
  );
}
