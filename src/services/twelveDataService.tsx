import axios from "axios";

const API_KEY = import.meta.env.VITE_TWELVE_DATA_API_KEY;
const BASE_URL = 'https://api.twelvedata.com/time_series?';
// https://api.twelvedata.com/time_series?apikey=fdd14706cfca46f0a41265c044474e93&symbol=AAPL&interval=1min

export async function fetchJSON(queryParams: Record<string, string>) {
    // console.log("TwelveData queryParams", queryParams);
    const url = `${BASE_URL}${new URLSearchParams({ ...queryParams, apikey: API_KEY })}`;
    // console.log("TwelveData url", url);
    const response = await axios.get(url);
    // if (!response.ok) {
    //     throw new Error("TwelveData request failed");
    // }
    console.log("TwelveData response", response);
    console.log("TwelveData response data: ", response.data);
    return response.data;
}