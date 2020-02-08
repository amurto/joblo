# JobLo

##### Recruitment Assistant using Job Profile Filtering and Web Scraping profiles from LinkedIn

JobLo automates the process of a recruiter swiping through resumes by directly providing a dynamic interface with resumes segregated and classified as per the skillset using Resume Parser. The recruiters can use the search engine to filter out job profiles according to their requirements.

## Resume Parser
Full name extraction using spaCy.
Education extraction using NLTK corpus matching.
Email & phone number extraction using Regex.
Skills set extraction using spaCy. Rule-based matching against noun chunks.

## Recommendation System
Finding the most similar words using the GenSim Word2Vec model trained on a corpus of technical terms.

## Web Scraping
Scraping profiles from LinkedIn using Scrapy and Selenium.

## Designation Extraction 
NER tagger for scraping designation from the text using spaCy.
Matching entered keyword with a designation from filtered resumes.
