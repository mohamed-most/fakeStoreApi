import axios from "axios";



export async function GET(baseURL, endpoint, params1) {
    try {
        const response = await axios.get(`${baseURL}${endpoint}`, {params: params1});
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function POST(baseURL, endpoint, params1) {
    try {
        const response = await axios.post(`${baseURL}${endpoint}`, params1);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function PUT(baseURL, endpoint, params1) {
    try {
        const response = await axios.put(`${baseURL}${endpoint}`, params1);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export async function DELETE(baseURL, endpoint, params1) {
    try {
        const response = await axios.delete(`${baseURL}${endpoint}`, {params: params1});
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function PATCH(baseURL, endpoint, params1) {
    try {
        const response = await axios.patch(`${baseURL}${endpoint}`, params1);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
