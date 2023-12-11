import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

import {BASE_URL}  from  '../constants';
import { logout } from './authSlice'; 

const baseQuery= fetchBaseQuery({baseUrl: BASE_URL});


export const apiSlice =createApi({
    baseQuery,
    tagTypes:['Products','Order','User'],
    endpoints:(builder) => ({}),

});
