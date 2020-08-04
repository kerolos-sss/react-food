import axios from 'axios'

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer h5rFJb7gUJ338nCYYtD92xuRFbpXjkPkeJIRLs_oD_dW5buQlusqkP5ai46IYelpqhmU_O9863J1uhOMAjeWNP1mVu3dcbfn207Wq3ecooeTjIV_GOzrUBqsFKopX3Yx"
    }
})