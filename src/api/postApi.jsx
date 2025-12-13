import axios from "axios";

const api = axios.create({ baseURL: "https://restcountries.com/v3.1/" });

export function getCountryData() {
  const result = api.get("/all?fields=name,population,region,capital,flags");
  return result;
}

export function getIndvCountryData(name) {
  const result = api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
  return result;
}
// export function getCountryDataCopy() {
//   fetch(
//     "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
//   )
//     .then((result) => {
//       return result.json();
//     })
//     .then((prev) => {
//       console.log("This is the getCountryDataCopy's result", prev);
//     });
// }

// export const getCountryDataCopy2 = async () => {
//   const result = await fetch(
//     "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
//   );
//   const data = await result.json();
//   console.log("This is the getCountryDataCopy2's result", data);
// };
