class APIUtils {

    constructor(apicontext, tokenData) {
        this.apicontext = apicontext;
        this.tokenData = tokenData;
    }

    async getToken() {
        const res = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.tokenData
            }
        )
        const reJson = await res.json()
        const token = reJson.token
        console.log(token)
        return token
    }

    async createOrder(createorderData) {
        let response = {}
        response.token = await this.getToken()
        const res = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                headers: {
                    'Authorization': response.token,
                    'content-type': 'application/json'
                },
                data: createorderData,
            }
        )
        const reJson = await res.json()
        const myorderID = reJson.orders[0]
        console.log(myorderID)
        response.myorderID = myorderID
        return response
    }
}

module.exports = { APIUtils }