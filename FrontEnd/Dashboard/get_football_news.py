from newsapi import NewsApiClient
import json

# Initialize the NewsApiClient with your API key
newsapi = NewsApiClient(api_key='573834d7841441feae6c40830db450b4')

def get_football_news():
    attempts = 0
    max_attempts = 5
    while attempts < max_attempts:
        try:
            # Fetch top headlines about football (fetch more to ensure we get at least 10)
            top_headlines = newsapi.get_top_headlines(q='football', language='en', page_size=20)  # Fetch 20 articles

            articles = top_headlines['articles']

            # Extract headlines and links
            news = []
            for article in articles:
                headline = article['title']
                link = article['url']
                news.append({'headline': headline, 'link': link})

            # Check if we have at least 10 articles
            if len(news) >= 10:
                return news[:10]  # Return only the first 10 articles
            else:
                attempts += 1

        except Exception as e:
            print(f"Error fetching news: {e}")
            attempts += 1

    # If after attempts we still have less than 10 articles, return what we have
    return news[:10] if news else []

def save_to_json(news, filename='football_news.json'):
    with open(filename, 'w') as f:
        json.dump(news, f, indent=4)

def main():
    news = get_football_news()
    save_to_json(news)
    print(f"{len(news)} recent football news articles saved to 'football_news.json'.")

if __name__ == "__main__":
    main()
