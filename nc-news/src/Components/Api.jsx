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

	export const getArticlesByTopic = async article_topic => {

		const { data } = await axios.get(`${BASE_URL}/topics/${article_topic}/articles`);
		
		return data.articles;
	}		


export const getArticleById = async article_id => {

		const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
		return data;
	  }

	  export const voteOnArticle = async (article_id, val)  => {
		await axios.patch(`${BASE_URL}/articles/${article_id}`, {'inc_votes': val });
	  }
	  
export const getArticleComments = async article_id => {

		const { data } = await axios.get(`${BASE_URL}/articles/${article_id}/comments`);
		return data.comments;
	  }