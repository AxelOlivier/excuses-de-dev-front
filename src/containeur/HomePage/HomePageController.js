import axios from 'axios';

const HomePageController = {

/**
 * GET /excuses
 * @returns {Promise<Excuse[]>}  return a array of excuses
 */
  getAllExcuses: () => new Promise((success) => {
     axios.get("http://localhost:8080/excuses").then((res) => {
        success(res.data)
     })
  }),

/**
 * POST /excuses
 * @param {string} message - new excuse add
 * @returns {Promise<Excuse[]>} - receive new Excuse list
 */
  pushNewExcuse: (newExcuse) => new Promise((success) => {
    axios.post("http://localhost:8080/excuses", {newExcuse}).then((res) => {
        success(res.data)
     })
  }),

};
export default HomePageController;
