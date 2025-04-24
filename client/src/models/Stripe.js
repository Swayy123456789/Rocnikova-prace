export const getConfig = async () => {
    const req = await fetch("http://localhost:3000/stripe/config", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        publishableKey: data.publishableKey
    }
}

export const createPaymentIntent = async () => {
    const req = await fetch("http://localhost:3000/stripe/create-payment-intent", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST"
    });
    const data = await req.json();
    return {
        status: req.status,
        clientSecret: data.clientSecret
    }
}