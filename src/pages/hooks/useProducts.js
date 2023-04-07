
const useProucts = (url="https://fakestoreapi.com/products") => {
    const fetchProducts = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error({ status: response.status, statusText: response.statusText })
            }
            const dataResponse = await response.json();
            // setLoading(false)
            return dataResponse
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     fetchProducts();
    // }, [url]);

    return {
        fetchProducts
    }
}

export default useProucts;