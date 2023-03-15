import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer esmoWQdiTndHtJEvYtXFE-YYTpGfCMsWuIvfvDRFoFYLUa7bnZ0LZZyGikbfCshxFbBXI5-I57hGQKRgVVVacDYUQ8NCz19e5GDomjgAYd609hR0MpwxrdTmHzUQZHYx'
    }
});