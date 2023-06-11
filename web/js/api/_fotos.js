/*
 * DO NOT EDIT THIS FILE, it is auto-generated. It will be updated automatically.
 * All changes done to this file will be lost upon re-running the 'silence createapi' command.
 * If you want to create new API methods, define them in a new file.
 *
 * Silence is built and maintained by the DEAL research group at the University of Seville.
 * You can find us at https://deal.us.es
 */

"use strict";

import { BASE_URL, requestOptions } from './common.js';

const fotosAPI_auto = {

    /**
    * Gets all fotos
    */
    getAll: async function() {
        let response = await axios.get(`${BASE_URL}/fotos`,requestOptions);
        return response.data;
    },

    /**
    * Gets an entry from 'fotos' by its primary key
    */
    getById: async function(fotoID) {
        let response = await axios.get(`${BASE_URL}/fotos/${fotoID}`,requestOptions);
        return response.data[0];
    },

    /**
    * Creates a new entry in 'fotos'
    */
    create: async function(formData, ) {
        let response = await axios.post(`${BASE_URL}/fotos`,formData, requestOptions);
        return response.data;
    },

    /**
    * Updates an existing entry in 'fotos' by its primary key
    */
    update: async function(formData, fotoID) {
        let response = await axios.put(`${BASE_URL}/fotos/${fotoID}`,formData, requestOptions);
        return response.data;
    },

    /**
    * Deletes an existing entry in 'fotos' by its primary key
    */
    delete: async function(fotoID) {
        let response = await axios.delete(`${BASE_URL}/fotos/${fotoID}`,requestOptions);
        return response.data;
    },
};

export {fotosAPI_auto};