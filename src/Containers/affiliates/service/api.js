import axios from 'axios'

// const URL="http://localhost:8000"
const URL = "https://affilator.onrender.com"
// const URL = "process.env.REACT_APP_BASE_URL;"

const KEY = "key";


//All are Offer/Campagin Section 


export const getData = async () => {
  try {
  
    const url = `${URL}/campaign/?api_key=${KEY}`;
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return   response.data;
  } catch (error) {
    console.log('error is-->', error);
  }
};

export const addCampagin = async (data) => {
  try {

    const url = `${URL}/campaign/?api_key=${KEY}`;

    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.log("error while posting: ", error.message);
  }
};


export const deleteCampagin = async (id) => {
  try {
    const url = `${URL}/campaign/${id}?api_key=${KEY}`;

    const response = await axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',

      }
    });
    const result = response.data;
    return result;

  } catch (error) {
    console.log("Error while deleting -->", error);
  }
};



//All are advitisors Section 

export const fetchAdvitisors = async () => {

  try {
    const url = `${URL}/api/advitisor/?api_key=${KEY}`;
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.log("Error while Fetching Advitisors -->", error.message);
  }
}

export const addNewAdvitisors = async (data) => {

  try {
    const url = `${URL}/api/advitisor/?api_key=${KEY}`

    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.log("Error while Adding New Advitisors-->", error.message)
  }
}

export const deleteAdvitisorsData = async (id) => {

  try {
    const url = `${URL}/api/advitisor/${id}/?api_key=${KEY} `
    const response = await axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    console.log(response.status);

    return response.status;



  } catch (error) {
    console.log("Error while Deleting Advitisors DAta --> ", error.message)
  }




}