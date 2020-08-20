import fetch from "../utils/customFetch";

const boardApi = {
  async getWeather(data) {
    try {
      return await fetch({
        url: `weather?&units=metric&lat=${data.latitude}&lon=${data.longitude}&appid=8b1cb9daef8e2166d79cbe69546160f4`,
        method: "GET",
      });
    } catch (err) {
      if (err && err.response && err.response.data && err.response.data.detail) {
        throw Error(err.response.data.detail);
      }
      throw Error("Oops, something is wrong");
    }
  },
};

export default boardApi;
