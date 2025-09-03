// creating useFetch custom hook
// export function useFetch(url) {
//   const [finaldata, setFinaldata] = useState({});
//   const [loading, setLoading] = useState(true);
//   async function getDetails() {
//     setLoading(true);
//     const res = await fetch(url);
//     const json = await res.json();
//     setFinaldata(json);
//     setLoading(false);
//   }
//   useEffect(() => {
//     getDetails();
//   });
//   return {
//     finaldata,
//     loading,
//   };
// }