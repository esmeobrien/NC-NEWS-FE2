import axios from 'axios';
const BASE_URL = 'https://my-nc-news.herokuapp.com/api';

export const getTopics = async () => {

	const { data } = await axios.get(`${BASE_URL}/topics`);
	return data;
	
	}
	
export const getAllArticles = async () => {

		const { data } = await axios.get(`${BASE_URL}/articles`);
		
		return data.articles;
	}	

export const getArticleById = async article_id => {

		const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
		return data;
	  }
	  
export const getArticleComments = async article_id => {

		const { data } = await axios.get(`${BASE_URL}/articles/${article_id}/comments`);
		return data.comments;
	  }