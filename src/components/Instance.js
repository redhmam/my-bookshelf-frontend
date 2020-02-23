//no-unused-vars
import axios from 'axios';
import { message } from 'antd';
import get from 'lodash/get';

export const client = axios.create({
    baseURL:`${process.env.REACT_APP_API}`,
    timeout: 180000,
    responseType: 'json'
});  

message.config({
    maxCount: 1,
});

export const options = {
    returnRejectedPromiseOnError: true,
    interceptors: {
        request: [
            ({ getState, dispatch }, config) => {
                if(get(config, 'showLoading', false)){
                    message.loading('Wait....', 0);
                }

                if (localStorage.getItem('api_token') !== null) {
                    config.headers['Authorization'] = localStorage.getItem('api_token')
                }

              return config
            }
        ],
        response: [
        {
          success: ({ dispatch }, response) => {
            message.destroy();

            if(response.status === 200 && typeof response.data.response !== 'undefined'){
                message.success(response.data.response);
            }
            return response
          },
          error: ({ dispatch }, error) => {
            message.destroy();

            if(error.response.status === 422 && error.response.data.response !== undefined){
                message.error(error.response.data.response);
            }else if(error.response.status === 401){
                message.error('You need to login!');
            }else if(error.response.status === 500){
                message.error('Something is wrong, please try again.');
            }
            return Promise.reject(error)
          }
        }
      ]
    }
}