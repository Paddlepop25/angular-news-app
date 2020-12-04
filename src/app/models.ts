export const ID_APIKEY = 'newsapi.org'

export interface ApiKey {
  id: string
  api: string
}

export interface CountryList {
  name: string,
  alpha2Code: string,
  flag: string
}

// consider saved or not, country code, retention of 5 mins
export interface NewsArticle {
  saved: boolean;
  countryCode: string;
  timestamp: number,
	source: string;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}

// "articles": [
//   {
//     "source": {
//       "id": null,
//       "name": "CNA"
//     },
//     "author": "CNA",
//     "title": "Backing Australia, US State Department says China hit 'new low' with doctored image - CNA",
//     "description": "SYDNEY: The United States has called China's use of a digitally manipulated image of an Australian soldier a \"new low\", weighing into the dispute between Canberra and Beijing over the tweet.",
//     "url": "https://www.channelnewsasia.com/news/world/australia-us-state-department-china-new-low-zhao-lijian-13683116",
//     "urlToImage": "https://cna-sg-res.cloudinary.com/image/upload/q_auto,f_auto/image/13313688/16x9/991/557/c60ecec79dc558607b9ced29d342d376/Uz/defense-secretary-james-mattis-welcomes-chinese-minister-of-national-defense-gen--wei-fenghe-to-the-pentagon-1.jpg",
//     "publishedAt": "2020-12-02T04:59:51Z",
//     "content": "SYDNEY: The United States has called China's use of a digitally manipulated image of an Australian soldier a \"new low\", weighing into the dispute between Canberra and Beijing over the tweet.\r\nChina h… [+2852 chars]"
//   },