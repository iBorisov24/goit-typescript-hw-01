import axios from 'axios';

type fetchDataRes<T> = Promise<T>;
async function fetchData<T>(url: string): fetchDataRes<T> {
	try {
		const response = await axios.get<T>(url);
		return response.data;
	} catch (error) {
		throw new Error(`Error fetching from ${url}: ${error}`);
	}
}
