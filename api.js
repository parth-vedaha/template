const axios = require("axios");

const GET_API = (url, accessToken) => {
    return new Promise(async (resolve, reject) => {
        try {
            const answer = await axios.get({
                url,
                headers: {
                    "X-Shopify-Access-Token": accessToken,
                },
                responseType: "json",
            });

            resolve(answer.data);
        } catch (error) {
            console.log("error", error);
            return res
                .status(500)
                .send({ statusCode: 500, message: "internal server error" });
        }
    });
};

const POST_API = (url, accessToken, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const answer = await axios.post({
                url,
                headers: {
                    "X-Shopify-Access-Token": accessToken,
                },
                responseType: "json",
                data,
            });

            resolve(answer.data);
        } catch (error) {
            console.log("error", error);
            return res
                .status(500)
                .send({ statusCode: 500, message: "internal server error" });
        }
    });
};

const DELETE_API = (url, accessToken) => {
    return new Promise(async (resolve, reject) => {
        try {
            const answer = await axios.delete({
                url,
                headers: {
                    "X-Shopify-Access-Token": accessToken,
                },
                responseType: "json",
            });
            resolve(answer.data);
        } catch (error) {
            console.log("error", error);
            return res
                .status(500)
                .send({ statusCode: 500, message: "internal server error" });
        }
    });
};

const PUT_API = (url, accessToken, updatedData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const answer = await axios.put({
                url,
                headers: {
                    "X-Shopify-Access-Token": accessToken,
                },
                responseType: "json",
                data: updatedData,
            });
            resolve(answer.data);
        } catch (error) {
            console.log("error", error);
            return res
                .status(500)
                .send({ statusCode: 500, message: "internal server error" });
        }
    });
};

module.exports = {
    GET_API,
    POST_API,
    DELETE_API,
    PUT_API,
};
