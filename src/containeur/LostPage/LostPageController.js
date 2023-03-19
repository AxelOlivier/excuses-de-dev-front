import axios from 'axios';

const HomePageController = {

  getExcusesByID: (excuseID) => new Promise((success, err) => {
     axios.get(`http://localhost:8080/excuses/${excuseID}`).then((res) => {
        success(res.data)
     }).catch(err)
  }),
};
export default HomePageController;
